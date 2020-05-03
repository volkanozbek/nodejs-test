var path = require('path');
var express = require('express');
var router = express.Router();

module.exports.index = function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
}
module.exports.test = function(req, res){
    res.sendFile(path.join(__dirname, 'login.html'));
}


router.get('/', module.exports.index);
router.get('/test/one', module.exports.test);

module.exports = router;