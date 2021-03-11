const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

//Where the HTML + CSS + Scripts + assets go
app.use(express.static(path.join(__dirname, 'public')));

//dotenv
require('dotenv').config();

//Listening to port
app.listen(PORT, HOST, function(){
  console.log(`Listening on port ${PORT}`);
});

//404 page
app.use(function(req, res){
  res.status(404);
  res.sendFile(path.join(__dirname,'public/404.html'));
});