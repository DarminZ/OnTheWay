const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("src"));

let count = 30000;

app.use("/home", ensureAuthenticated);

function ensureAuthenticated(req, res, next) {
  let cookies = req.headers.cookie; //return string
  console.log(cookies);
  res.setHeader("Content-Type", "text/html");
  if (cookies) {
    let cookiesObj = cookieParser.parse(cookies);
    let name = cookiesObj.username;
    if (name) {
      // 已登录状态
      res.sendFile(__dirname + "/src/index.html");
      return;
    }
  }
  // 未登录状态
  res.sendFile(__dirname + "/src/login.html");
}

app.post("/login", (req, res) => {
  if (req.body.username) {
    res.cookie("token", "token", {
      maxAge: 3600000
    });
    res.cookie("username", req.body.username, {
      maxAge: 3600000
    });
    let redirectUrl = "/home";
    res.writeHead(302, {
      Location: redirectUrl
    });
    res.end();
  }
});

app.use("/api1/*", (req, res, next) => {
  let cookies = req.headers.cookie;
  if (cookies) {
    let cookiesObj = cookieParser.parse(cookies);
    let name = cookiesObj.username;
    if (name) {
      // cookie 有username
      next();
      return;
    }
  }
  // cookie 无username
  res.sendStatus(400);
});

app.get("/getCount", (req, res) => {
  res.send({ count });
});

app.get("/api1/add", (req, res) => {
  let { number } = req.query;
  if (number) {
    count += Number(number);
    res.send({ count });
    return;
  }
  res.send("params error");
});

app.post("/api1/subtract", (req, res) => {
  let { number } = req.body;
  console.log(req.body);
  if (number) {
    count -= number;
    res.send({ count });
    return;
  }
  res.send("params error");
});

app.use("/api2/*", (req, res, next) => {
  console.log(req.headers.referer);
  if (
    !req.headers.referer ||
    !req.headers.referer.startsWith("http://localhost:8080")
  ) {
    res.sendStatus(401);
    return;
  }
  let cookies = req.headers.cookie;
  if (cookies) {
    let cookiesObj = cookieParser.parse(cookies);
    let name = cookiesObj.username;
    if (name) {
      // cookie 有username
      next();
      return;
    }
  }
  // cookie 无username
  res.sendStatus(400);
});

app.get("/api2/mutiple", (req, res) => {
  let { number } = req.query;
  if (number) {
    count *= Number(number);
    res.send({ count });
    return;
  }
  res.send("params error");
});

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/src/attach3.html");
});

var port = 8080;
app.listen(8080, "0.0.0.0");

console.log("start server on port : " + port);
