// set up ======================================================================
var express  = require('express');
var app      = express(); 													
var port  	 = process.env.PORT || 8080; 			
var database = require('./config/database'); 			

let morgan = require('morgan'); 		
let bodyParser = require('body-parser'); 	
let methodOverride = require('method-override'); 

// configuration ===============================================================
const MongoClient = require('mongodb').MongoClient;	
// Connection URL
const url = database.url;
			
app.use(morgan('dev')); 										
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app,MongoClient,url);

// server run port    ==========================================================
app.listen(port,() => {
    console.log(`The Magic is ready on port:  ${port}`)
});



