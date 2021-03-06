var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayout = require('express-ejs-layouts');
var settings = require('./Settings');
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var fs = require('fs');

var accessLogfile = fs.createWriteStream('access.log', {flags: 'a'});
var errorLogfile = fs.createWriteStream('error.log', {flags: 'a'});

var indexRouter = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayout);

app.use(logger("combined", {stream: accessLogfile}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: settings.cookieSecret,
    store: new MongoStore({
        url: 'mongodb://localhost/' + settings.db,
        autoRemove: 'native'
    })
}));

app.use(flash());

app.use(function (req, res, next) {
    console.log('app.user local');
    res.locals.user = req.session.user;
    res.locals.post = req.session.post;
    var error = req.flash('error');
    res.locals.error = error.length ? error : null;

    var success = req.flash('success');
    res.locals.success = success.length ? success : null;
    next();
});

app.use('/', indexRouter);
app.use('/u/:user', indexRouter);
app.use('/post', indexRouter);
app.use('/reg', indexRouter);
app.use('/login', indexRouter);
app.use('/logout', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    errorLogfile.write('[' + new Date() + ']\n' + err.stack + '\n');
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
