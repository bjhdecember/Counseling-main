// Bring in the express server and create application
let express = require('express')
let app = express();

// use the express
let router = express.Router();

// Create Get to return a list of all charts
router.get('/', function (req, res, next) {
  res.send("chart");
});

// Configure router so all routes are prefixed with /api/vl
app.use('/api/', router);

// Create server to listen port 5000
var server = app.listen(5500, function () {
  console.log('Node server is running on http://localhost:5500..');
});

require('dotenv').config()
const express = require('express')

const server = express()

server.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the Server' })
})

server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`))

