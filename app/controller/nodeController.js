var path = require('path');

module.exports.index = function(req, res){
    var kisiler = ['Volkan','Ozbek'];
    
    res.render('index', {mesaj: 'Mesaj controller'});
    
}

module.exports.test = function(req, res){
    res.sendFile(path.join(__dirname, '../../login.html'));
}


