"use strict";

var _axios = require("axios");

var axios = _interopRequireWildcard(_axios);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// axios.get("http://127.0.0.1:8081/process_get?first_name=darmin&last_name=zhou").then(function (res) {
//    console.log('1:', res.data);
// }).catch(function (err) {
//    console.log(err);
// });
//
// axios.get("http://127.0.0.1:8081/").then(function (res) {
//    console.log("2:", res.data);
// }).catch(function (err) {
//    console.log(err);
// });

axios.post("http://127.0.0.1:8081/login", { username: 'admin', password: '123' }).then(function (res) {
   console.log("3:", res.data);
}).catch(function (err) {
   console.log(err);
});
