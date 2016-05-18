var express = require('express');
var router = express.Router();
var db=require('./db');
/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//  var testValue=req.query.test;
//  console.log('request : '+testValue);
//  res.writeHead(200,{'Content-Type':'text/html'});
//  res.send('test');
//  res.end();
	console.log('insert');
	db.insertData('test',
		{
			p_idx:'00001',
			name:'test',
			price:'24,000',
			s_price:'24,000',
			url:'http://112.166.55.38:9738/images/00001.png',
			explain:'test',
			s_idx:'0001'
		}	
		,res);
});

module.exports = router;
