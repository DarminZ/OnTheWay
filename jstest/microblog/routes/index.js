var crypto = require('crypto');
var User = require('../models/user');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'home'});
});

router.get('/u/:user', function (req, res, next) {
    res.render('index', { title: 'user'});
});

router.post('/post', function (req, res, next) {
    res.render('index', { title: 'post'});
});

router.get('/reg', function (req, res, next) {
    res.render('reg', { title: 'register'});
});

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

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'login'});
});

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

router.get('/logout', function (req, res, next) {
    req.session.user = null;
    req.flash('success', 'logout');
    res.redirect('/')
});

module.exports = router;
