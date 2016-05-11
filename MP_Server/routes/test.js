var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
//mongoose.createConnection('mongodb://localhost:27017/test');
var db=mongoose.connection;
var async=require('async');
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//	async.waterfall([
//		function(res){
		var testValue=req.query.test;
		console.log('request :'+testValue);
		var collection=db.collection('store');
		async.waterfall([
			function (search){
			var result;
			collection.find({'serial':testValue}).toArray(function(err,doc){
				result=doc;
				search(null,result);
			});
	//			search(null,result);
			},function (result,search){
				res.send(result);
				console.log(result);
				res.end();
			}
			
		]);
	//	var resend=res;
	//	result=collection.find({'serial':testValue}).toArray(function( err,doc){
	//		result=doc;
	//		console.log(doc);
	//		resend.send(doc);
	//		return doc;
	//	});
	//	res.send({'test':testValue,imageUrl:'http://112.166.55.38:9738/images/no_image.png'});
	//	res.send('http://112.166.55.38:9738/images/no_image.png');
		//res.send(result);
	//	console.log('result:'+result);
	//	res.end();
		//	find(null,testValue);
//		},
//		function(value,find){
		//	console.log('waterfall:'+value);
//		}
//	]);
});

module.exports = router;
