var crypto = require('crypto');
var User = require('../models/user');
var Post = require('../models/post');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    Post.get(null, function (err, posts) {
        if (err) {
            posts = [];
        }
        res.render('index', {
            title: 'home',
            posts: posts
        });
    });
});

router.get('/u/:user', function (req, res, next) {
    User.get(req.params.user, function (err, user) {
        if (!user) {
            req.flash('error', 'no user');
            return res.redirect('/');
        }
        Post.get(user.name, function (err, posts) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/');
            }
            res.render('user', {
                title: user.name,
                posts: posts
            });
        });
    });
});

router.post('/post', checkLogin);
router.post('/post', function (req, res, next) {
    var currentUser = req.session.user;
    var post = new Post(currentUser.name, req.body.post);
    post.save(function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/');
        }
        req.flash('success', '发表成功');
        res.redirect('/u/' + currentUser.name);
    });
});

router.get('/reg', checkNotLogin);
router.get('/reg', function (req, res, next) {
    res.render('reg', { title: 'register'});
});

router.post('/reg', checkNotLogin);
router.post('/reg', function (req, res, next) {
    if (req.body['password-repeat'] !== req.body['password']) {
        req.flash('error', 'twice password are different');
        return res.redirect('/reg');
    }
    // 生成口令的散列值
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    var newUser = new User({
        name: req.body.username,
        password: password
    });

    // 检查用户名是否已经存在
    User.get(newUser.name, function (err, user) {
        if (user) {
            err = 'username already exists';
        }
        if (err) {
            req.flash('error', err);
            return res.redirect('/reg');
        }
        // 如果不存在就添加
        newUser.save(function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/reg');
            }
            req.session.user = newUser;
            req.flash('success', 'success');
            return res.redirect('/');
        })
    })
});

router.get('/login', checkNotLogin);
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'login'});
});

router.post('/login', checkNotLogin);
router.post('/login', function (req, res, next) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    User.get(req.body.username, function (err, user) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/login');
        }
        if (!user) {
            req.flash('error', 'not exist');
            return res.redirect('/login');
        }
        if (user.password != password) {
            req.flash('error', 'wrong password');
            return res.redirect('/login');
        }
        req.session.user = user;
        req.flash('success', 'login');
        return res.redirect('/');
    })
});

router.get('/logout', checkLogin);
router.get('/logout', function (req, res, next) {
    req.session.user = null;
    req.flash('success', 'logout');
    res.redirect('/')
});

function checkNotLogin(req, res, next) {
    if (req.session.user) {
        req.flash('error', '已登入');
        return res.redirect('/');
    }
    next();
}

function checkLogin(req, res, next) {
    if (!req.session.user) {
        req.flash('error', '未登入');
        return res.redirect('/login');
    }
    next();
}

module.exports = router;
