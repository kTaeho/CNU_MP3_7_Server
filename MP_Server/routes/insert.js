var express = require('express');
var router = express.Router();
var db=require('./db');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('insert',{ });
//  var testValue=req.query.test;
//  console.log('request : '+testValue);
//  res.writeHead(200,{'Content-Type':'text/html'});
//  res.send('test');
//  res.end();
    });
    module.exports = router;
