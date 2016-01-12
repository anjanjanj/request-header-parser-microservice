'use strict';

var express = require('express');
var useragent = require('express-useragent');

var app = express();
require('dotenv').load();

app.use(useragent.express());

app.get('/', function(req, res) {
  console.log(req.ip);
  res.send({
    ipaddress: req.ip,
    language: req.headers['accept-language'].split(',')[0],
    OS: req.useragent.os
  });
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});