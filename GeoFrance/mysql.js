const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const {HomePage} = require('./routes/index');
const port = 8080;

console.log('Get connection ...');

var conn = mysql.createConnection({
  database: 'geographieFrance',
  host: "localhost",
  user: "phpmyadmin",
  password: "1035@leX"
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});
global.conn=conn;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// routes for the app
app.get('/', HomePage);

// set the app to listen on the port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
