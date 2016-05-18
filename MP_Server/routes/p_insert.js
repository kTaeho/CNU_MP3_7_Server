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
	var p_idx=req.body.productcode;
	var name=req.body.productname;
	var s_idx=req.body.shopcode;
	var price=req.body.price;
	var s_price=req.body.saleprice;
	var url=req.body.picurl;
	var explain=req.body.intro;
	db.insertData(true,{
		p_idx:p_idx,
		name:name,
		price:price,
		s_price:s_price,
		url:url,
		explain:explain,
		s_idx:s_idx
		},res);
});

module.exports = router;
