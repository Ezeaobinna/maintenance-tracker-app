// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/users/requests', function(req, res) {
    res.json({ message: 'Fetch all the maintenance requests of a logged in user' });   
});

router.get('/users/requests/:requestId', function(req, res) {
    res.json({ message: 'Fetch a maintenance request that belongs to a logged in user' });   
});

router.post('/users/requests', function(req, res) {
    res.json({ message: 'Create a maintenance request' });   
});

router.put('/users/requests/:requestId', function(req, res) {
    res.json({ message: 'Modify a maintenance request!' });   
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/v1', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);