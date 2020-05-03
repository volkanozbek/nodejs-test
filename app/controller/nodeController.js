var path = require('path');

module.exports.index = function(req, res){
    res.render('index');
    
}

module.exports.test = function(req, res){
    res.render('onepage');
}


