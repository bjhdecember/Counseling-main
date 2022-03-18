var express = require("express");
var path = require("path");
var open = require('open');
var fs = require("fs");
var bodyParser = require("body-parser");

var port = 5500;
var app = express();

app.use(express.static('public'))

// for parsing application/json
//app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.post("/api", function (req, res) {
  fs.open('uploads/uploads', 'a', function(err, fd) {
  
    // If the output file does not exists
    // an error is thrown else data in the
    // buffer is written to the output file
    if(err) {
        console.log('Cant open file');
    }else {
      var buffer = JSON.stringify(req.body);
        fs.write(fd, buffer, 0, null, function(err,writtenbytes) {
            if(err) {
                console.log('Cant write to file');
            }else {
                console.log(writtenbytes +
                    ' characters added to file');
            }
        })
    }
})

  console.log(req.body);
  res.send("recieved your request!");
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://127.0.0.1:" + port);
  }
});
