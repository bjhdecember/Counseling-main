var express = require("express");
var path = require("path");
var open = require("open");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();

var port = 5500;
var app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/api", function (req, res) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.render("form");
  console.log(req.body);
  res.send("recieved your request!");
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
