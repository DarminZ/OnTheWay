const http2 = require("http2");
const fs = require("fs");
const url = require("url");

const server = http2.createSecureServer(
  {
    key: fs.readFileSync("localhost-privkey.pem"),
    cert: fs.readFileSync("localhost-cert.pem"),
  },
  function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
        console.log(err);
        // HTTP 状态码: 404 : NOT FOUND
        // Content Type: text/plain
        response.writeHead(404, { "Content-Type": "text/html" });
      } else {
        // HTTP 状态码: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, { "Content-Type": "text/html" });

        // 响应文件内容
        response.write(data.toString());
      }
      //  发送响应数据
      response.end();
    });
  }
);
server.on("error", (err) => console.error(err));

server.listen(8443);
