// Bring in the express server and create application
let express = require('express');
let app = express();
let chartRepo = require('./repos/chartRepo')

// use the express
let router = express.Router();

// Configure middleware to support JSON data parsing in request object
app.use(express.json());

// Create Get to return a list of all charts
router.get('/', function (req, res, next) {
  chartRepo.get(function (data) {
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "All charts retrieved.",
      "data": data
    });
  }, function(err) {
    next(err);
  });
});
// Create Get/search?id=n&name=str to search for charts by 'id' and/or 'name'
router.get('/search', function (req, res, next) {
  let searchObject = {
    "id": req.query.id,
    "name": req.query.name
  };

  chartRepo.search(searchObject, function (data) {
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "All charts retrieved.",
      "data": data
    });
  }, function (err) {
    next(err);
  });
})
// Create GET/id it return a single chart
router.get('/:id', function (req, res, next) {
  chartRepo.getById(req.params.id, function (data) {
    if (data) {
      res.status(200).json({
        "status": 200,
        "statusText": "OK",
        "message": "Single chart retrieved.",
        "data": data
      });
    }
    else {
      res.status(404).json({
        "status": 404,
        "statusText": "Not Found",
        "message": "The chart'" + req.params.id + "' could not be found.",
        "error": {
        "code": "NOT_FOUND",
        "message": "The chart'" + req.params.id + "'could not be found."
        }
      });
    }
}, function(err) {
  next(err);
});
});

router.post('/', function (req, res, next) {
  chartRepo.insert(req.body, function(data) {
    res.status().json({
      "status": 201,
      "statusText": "Created",
      "message": "New Chart Added.",
      "data": data
    });
  }, function(err) {
    next(err);
  });
})

router.put('/:id', function (req, res, next) {
  chartRepo.getById(req.params.id, function (data) {
    if (data) {
      // Attempt to update the data
      chartRepo.update(req.body, req.params.id, function (data) {
        res.status(200).json({
          "status": 200,
          "statusText": "OK",
          "message": "Chart '" +  req.params.id + "' updated.",
          "data": data
        });
      });
    }
    else {
      res.status(404).json({
        "status": 404,
        "statusText": "Not Found",
        "message": "The chart '" + req.params.id + "' could not be found.",
        "error": {
          "code": "NOT_FOUND",
          "message": "The chart '" + req.params.id + "' could not be found."
        }
      });
    }
  }, function(err) {
    next(err);
  });
})


// Configure router so all routes are prefixed with /api/vl
app.use('/api/', router);

// Create server to listen port 5500
var server = app.listen(5000, function () {
  console.log('Node server is running on http://localhost:5500..');
});

//require('dotenv').config()
//const express = require('express')

//const server = express()

//server.get('/hello', (req, res) => {
  //res.json({ message: 'Hello from the Server' })
//})

//server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`))

