const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mockModel = require("./src/mockmodel");

let { userInfos, resInfo } = mockModel;
let maxid = userInfos.length;
let resData = [resInfo];

app.use((req, res, next) => {
  let referer = req.get("referer");
  next();
});

app
  .route("/userInfo")
  .get((req, res) => {
    res.status(200).send(userInfos);
  })
  .post((req, res) => {
    let userInfo = req.query;
    if (userInfo) {
      userInfo.uid = ++maxid;
      userInfos.push(userInfo);
    }
    res.status(200).send(userInfo);
  })
  .delete((req, res) => {
    let uid = req.query.uid;
    let deleteUserInfo;
    let newUserInfo = userInfos.map(userInfo => {
      if (userInfo.uid !== uid) {
        return userInfo;
      } else {
        deleteUserInfo = userInfo;
      }
    });
    userInfos = newUserInfo;
    res.status(200).send(deleteUserInfo);
  });

app.route("/getAllResUnit").get((req, res) => {
  res.status(200).send(resData);
});

app.route("/getreferrer").get((req, res) => {
  res.status(200).send(req.get("referer") + req.hostname);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
