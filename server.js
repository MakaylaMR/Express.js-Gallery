//importing express to create server (this is like http?)
const express = require('express');
const app = express();

//importing the path builtin module
const path = require('path');

//process.env.PORT/HOST comes from the .env file where PORT is 3000 and HOST is localhost. || is kinda like a fancy or if process.env.PORT doesn't work
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

/**
 * app.use --> a series of middleware are called (path and __dirname)
 * express.static --> builtin middleware where public is the root 
 * path.join --> this joins __dirname + 'public' and returns a string of the combined __dirname and public directory
 * __dirname --> C:\Users\makay\Documents\wbdv-2021\assignments\cpnt262\cpnt262-a3
 * public --> refers to the public directory located in the root project.
 */
app.use(express.static(path.join(__dirname, 'public')));

//importing dotenv and config 
require('dotenv').config();

//Listening to port
app.listen(PORT, HOST, function(){
  console.log(`Listening on port ${PORT}`);
});

//404 page (links to 404.html) + status code of 404
app.use(function(req, res){
  res.status(404);
  res.sendFile(path.join(__dirname,'public/404.html'));
});