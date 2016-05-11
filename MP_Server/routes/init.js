var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MP3');
//var MongoClient = require('mongodb').MongoClient;
//var Server = require('mongodb').Server;
//var mongoclient = new MongoClient(new Server('localhost',27017,{'native_parser':true}));
//var db = mongoclient.db('MP3');
var db=mongoose.connection;
var async=require('async');
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//	async.waterfall([
//		function(res){
//		var testValue=req.query.test;
//		console.log('request :'+testValue);


		async.waterfall([
			function (init){
			var result='';
		var collection=db.collection('product');
			collection.find().toArray(function(err,doc){
				result=doc;
			//	for(var i=0;i<doc.length;i++){
			//		console.log(doc[i]);
			//		result+=doc[i].toString();
			//	}
			//	console.log('t:'+result);
				init(null,result);
			});
	//			search(null,result);
			},function (result,init){
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
