var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

/**
 * 为每个路由的前置操作
 */
app.use(function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    next()
})

app.get('/', function (req, res) {
    res.send('index'); // Content-Type: JSON
})

app.get('/cache', function (req, res) {
    res.send('cache'); // Content-Type: JSON
})

app.get('/nocache', function (req, res) {
    res.send('nocache'); // Content-Type: JSON
})

app.get('/tata', function (req, res) {
    res.send('tsert'); // Content-Type: JSON
})

app.get('/demo1/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})


var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})