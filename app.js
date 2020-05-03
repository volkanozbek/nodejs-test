var fs = require('fs');

var express = require('express');
var path = require('path');
var testController = require('./nodeController');

var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));


app.use('/test', testController);

app.listen(8080);