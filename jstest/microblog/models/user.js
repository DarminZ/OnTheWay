var mongodb = require('./db');

function User(user) {
    this.name = user.name;
    this.password = user.password;
}

User.prototype.save = function (callback) {
    //存入mongodb文档
    var user = {
        name: this.name,
        password: this.password
    }
    // 读取users集合
    mongodb.open(function (err, db) {
        db.collection('users', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //给name添加索引
            collection.ensureIndex('name', {unique: true});
            //写入user文档
            collection.insert(user, {safe: true}, function (err, user) {
                db.close();
                callback(err, user);
            });
        });
    });
};

User.get = function (username, callback) {
    mongodb.open(function (err, db) {
        db.collection('users', function (err, collection) {
            if (err) {
                db.close();
                return callback(err);
            }
            //查找name属性为username的文档
            collection.findOne({name: username}, function (err, doc) {
                db.close();
                if (doc) {
                    //封装文档为User对象
                    var user = new User(doc);
                    callback(err, user);
                } else {
                    callback(err, null);
                }
            });
        });
    });
};
module.exports = User;