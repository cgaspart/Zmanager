require('babel-register');
const express = require('express');
const bodyParser = require('body-parser');
const {success, error} = require('./lib/jsonReturn.js');
const app = express();
const config = require('./srcs/config');

var mysql      = require('mysql');
var db         = mysql.createConnection({
	host     : config.db.host,
    database : config.db.database,
    user     : config.db.user,
    password : config.db.password
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: "" + err.message);
    return;
  }
  console.log("connected as id: " +  db.threadId);
});
