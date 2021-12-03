const http = require("http")
const fs = require('fs');

let longpollingResMap = Object.create(null);
let sseResMap = Object.create(null);
const noticeList = [];

http.createServer(function (req, res) {
  let fileName = "." + req.url;

  /** 发布新的通知 */
  if (fileName === './publish' && req.method == 'POST') {
    console.log('go to list');
    req.setEncoding('utf8');
    let message = '';
    req.on('data', function(chunk) {
      message += chunk;
    }).on('end', function() {
      publish(message);
      res.end("ok");
    });

    return;
  }

  if (fileName == './list') {
    console.log('go to list');
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.setHeader("Cache-Control", "no-cache");
    res.write(JSON.stringify(noticeList));
    res.end();

    return;
  }

  /** 长轮询服务 */
  if (fileName == './longpolling') {
    console.log('go to longpoling');
    let id = Math.random();
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.setHeader("Cache-Control", "no-cache");
  
    longpollingResMap[id] = res;
  
    req.on('close', function() {
      delete longpollingResMap[id];
    });
  
    return;
  }

  /** sse服务 */
  if (fileName === "./sse") {
    console.log('go to sse');
    let id = Math.random();
    res.writeHead(200, {
      "Content-Type":"text/event-stream",
      "Cache-Control":"no-cache",
      "Connection":"keep-alive",
      "Access-Control-Allow-Origin": '*',
    });
    res.write("retry: 10000\n");

    sseResMap[id] = res;

    req.on("close", function () {
     delete sseResMap[id]
    });

    return;
  }

  /** 更新 noticeList， 并通知长轮询接口和sse连接响应内容 */
  function publish(message) {
    // 更新 noticeList 
    noticeList.push(message);
    console.log(noticeList);

    // 触发长轮询连接返回更新内容
    for (let id in longpollingResMap) {
      let res = longpollingResMap[id];
      res.end(message);
    }
    longpollingResMap = Object.create(null);

    // 触发sse连接的事件
    for (let id in sseResMap) {
      let res = sseResMap[id];
      res.write("data: " + message + "\n\n");
    }
  }

  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log(err);
      // HTTP 状态码: 404 : NOT FOUND
      // Content Type: text/html
      res.writeHead(404, {'Content-Type': 'text/html'});
    } else{             
        // HTTP 状态码: 200 : OK
        // Content Type: text/html
        res.writeHead(200, {'Content-Type': 'text/html'});    
        
        // 响应文件内容
        res.write(data.toString());        
    }
    //  发送响应数据
    res.end();
  });
}).listen(8844, "127.0.0.1");


// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8844/');