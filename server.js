const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, 'public')));

//Listening to port
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

require('dotenv').config();
const db = require('db');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.env.DB_PASS
});

app.use(function(req, res){
  res.status(404);
  res.sendFile(path.join(__dirname,'public/404.html'));
});