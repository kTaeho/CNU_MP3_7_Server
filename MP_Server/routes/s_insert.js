var express = require('express');
var router = express.Router();
var db=require('./db');
/* GET home page. */
router.post('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//  var testValue=req.query.test;
//  console.log('request : '+testValue);
//  res.writeHead(200,{'Content-Type':'text/html'});
//  res.send('test');
//  res.end();
	var name=req.body.productname;
	var s_idx=req.body.shopcode;
	var lat=req.body.xx;
	var lng=req.body.yy;

});

module.exports = router;
