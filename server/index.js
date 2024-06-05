require('dotenv').config(); //load enviroment variables
const express = require('express'); //import express framework
const cors = require('cors'); //import CORS middleware to enable Cross-Origin Resource Sharing
const compression = require('compression'); //import compression middleware to compress response bodies for all requests 
const app = express(); //create an express app
const http = require('http'); // Import the built-in Node.js HTTP module
const connectDb = require('./db'); //import db
const bodyParser = require('body-parser'); //import body-parser middleware to parse incoming request bodies
const {appOrigin} = require('./config') //import appOrigin from the config file 


// establish db connection
connectDb();

//create http server with express app
const server = http.createServer(app);
const port = process.env.port || 5000; //set port enviroment variables
server.listen(port, () => {
    console.log('Backend server is running!');
    console.log(`Server started on port ${port}`);
});

// Use compression middleware to compress response bodies
app.use(compression());

// Use built-in middleware to parse incoming JSON requests
app.use(express.json());

// Use built-in middleware to parse URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// Set the view engine to EJS for rendering views
app.set('view engine', 'ejs');

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use body-parser middleware to parse URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin: appOrigin})); //configures the CORS (Cross-Origin Resource Sharing) middleware with specific options for your Express server.