var fs = require('fs');

var express = require('express');
var path = require('path');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './app/views/'));

var testController = require('./app/routes/nodeRoute');

app.use(ejsLayouts);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/test', testController);

app.listen(8080);