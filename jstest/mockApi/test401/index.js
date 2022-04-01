const express = require("express");
const app = express();

app.route("/4011").get((req, res) => {
  res.status(401).send('something wrong with you');
});

app.route("/4012").get((req, res) => {
  if (!req.get('Authorization')) {
    res.set({
      'WWW-Authenticate': 'Basic realm="Access to the staging site"',
      "Access-Control-Allow-Origin": '*'
    });
    // res.set('WWW-Authenticate', 'Basic realm="Access to the staging site"');
    res.status(401).send('something wrong with you');
  } else {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send('i am ok')
  }
});
app.route("/4014").get((req, res) => {
  if (!req.get('Authorization')) {
    res.set('WWW-Authenticate', 'Basic realm="Access to the staging site"');
    res.status(401).send('something wrong with you');
  } else {
    res.status(200).send('i am ok')
  }
});

app.route("/4013").get((req, res) => {
  res.set('WWW-Authenticate', 'Basic realm="Access to the staging site"');
  res.status(401).send('something wrong with you');
});

app.route("/404.4").get((req, res) => {
  res.status(404.4).send('something wrong with you');
});

app.route("/499").get((req, res) => {
  res.status(499).send('something wrong with you');
});

app.route("/img").get((req, res) => {
  res.status(200).send('<img src="/4013" />');
});

app.route("/img2").get((req, res) => {
  res.status(200).send('<img src="http://1test.b.com/4013" />');
});


app.listen(3322, () => console.log("Example app listening on port 3322!"));
