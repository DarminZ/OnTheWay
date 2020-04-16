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

// app.get('/', function (req, res) {
//     res.set({
//         'Access-Control-Allow-Origin': '*'
//     }).send([1, 2, '3']); // Content-Type: JSON
// // res.send(new Buffer('<p>some html</p>')); // Content-Type: File (application/octet-stream)
// // res.send("Hello World"); // Content-Type: text/html
// })

app.get('/', function (req, res) {
    res.send([1, 2, '3']); // Content-Type: JSON
// res.send(new Buffer('<p>some html</p>')); // Content-Type: File (application/octet-stream)
// res.send("Hello World"); // Content-Type: text/html
})

app.get('/cors', function (req, res) {
    res.send('cors'); // Content-Type: JSON
// res.send(new Buffer('<p>some html</p>')); // Content-Type: File (application/octet-stream)
// res.send("Hello World"); // Content-Type: text/html
})

app.get('/c.html', function (req, res) {
    res.sendFile(__dirname + "/" + "c.html");
})
app.post('/login', function (req, res) {
    var params = req.body;
    if (params.username === 'admin'){
        if (params.password === '123') {
            res.send({success: 'success'})
        } else {
            res.send({code: '1', message: 'wrong password'})
        }
    }
    res.send({code: '2', message: 'no user'});
})

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.get('/calljsonp', function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name: 'jsonpres',
        last_name: 'jsonplast'
    };
    res.jsonp(response);
})

app.get("/sse", function (req, res) {
    console.log(111)
    res.writeHead(200, {
        "Content-Type":"text/event-stream",
        "Cache-Control":"no-cache",
        "Connection":"keep-alive"
    });
    res.write("event: connecttime\n");
    res.write("retry: 10000\n");
    res.write("data: " + (new Date()) + "\n\n");
    let i = 0;
    var timer = setInterval(function () {
        res.write("data: " + (new Date()) + "\n\n");
        console.log(i++);
    }, 2000);
    req.connection.addListener("close", function () {
        clearInterval(timer);
    }, false);
});

var server = app.listen(8082, function () {

    var port = server.address().port;
    console.log("应用实例，访问地址为 http://localhost:%s", port)

})
