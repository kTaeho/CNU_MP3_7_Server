var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db=mongoose.connection;
var async=require('async');
var Query=module.exports={
	insertData:function(con,data,res){
		var resend=res;
		var condition=con;
		async.waterfall([
			function(res){
				
			}		
		]);
	},
	searchData: function(data,res){
		resend=res;
		
	}
};
//var async=require('async');
/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//	async.waterfall([
//		function(res){
//		var testValue=req.query.test;
//		console.log('request :'+testValue);
//		var collection=db.collection('store');

//		collection.find({'serial':testValue}).toArray(function( err,doc){
				
//			console.log(doc);
//		});
	//	res.send({'test':testValue,imageUrl:'http://112.166.55.38:9738/images/no_image.png'});
	//	res.send('http://112.166.55.38:9738/images/no_image.png');
		//res.send(result);
//		res.end();
		//	find(null,testValue);
//		},
//		function(value,find){
		//	console.log('waterfall:'+value);
//		}
//	]);
//});

//module.exports = router;
