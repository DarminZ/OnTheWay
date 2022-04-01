//case 1: 单纯 401
"http://1test.a.com/4011"

//case 2: 401 + WWW-Authenticate
"http://1test.a.com/4012"

//case 3: fetch 401
fetch('/4013').then(res => {
    console.log('response', res);
    return  res.text();
}).then(data  => console.log('data', data))
  .catch(err => console.log('err', err));

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", () => console.log('req', oReq));
oReq.open("GET", "/4013");
oReq.send();

//case 4: img401
"http://1test.a.com/img"


//case 5: 跨域 fetch 401
fetch('http://1test.b.com/4012').then(res => {
    console.log('response', res);
    return  res.text();
}).then(data  => console.log('data', data))
  .catch(err => console.log('err', err));

//case 6: 跨域 img401
"http://1test.a.com/img2"