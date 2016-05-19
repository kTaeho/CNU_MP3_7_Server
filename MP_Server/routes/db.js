var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MP3',function(err){
	if(err)
		conolse.log('mongoose connection error:'+err);
});
var connection=mongoose.connection;
connection.on('error',console.error.bind(console,'connction error:'));
connection.once('open',function callback(){
	console.log('database connection Success');		
});
var storeSchema=mongoose.Schema({
	s_idx:String,
	name:String,
	lat:String,
	lng:String
});
var productSchema=mongoose.Schema({
	p_idx:String,
	name:String,
	price:String,
	s_price:String,
	url:String,
	explain:String,
	s_idx:String
});
var store=mongoose.model('store',storeSchema);
var product=mongoose.model('product',productSchema);
var db=mongoose.connection;
var productdb=db.collection('product');
var storedb=db.collection('store');
var async=require('async');
var date=require('date-utils');
var dateObj=new Date();
var currentTime=dateObj.toFormat('YYMMDDHH24MI');
console.log(currentTime);
var Query=module.exports={
	insertData:function(con,data,res){
		var resend=res;
		if(con){
		async.waterfall([
			function(insert){
				var result='';
				productdb.insert({
					p_idx:data.p_idx,
					name:data.name,
					price:data.price,
					s_price:data.s_price,
					url:data.url,
					explain:data.explain,
					s_idx:data.s_idx
					},function(err,doc){
						if(err) result=err;
						else result='success';
					insert(null,result);
				});
				//var item=new product({
				//	p_idx:data.p_idx,
				//	name:data.name,
				//	price:data.price,
				//	s_price:data.s_price,
				//	url:data.url,
				//	explain:data.explain,
				//	s_idx:data.s_idx
				//});
				//item.save(function(err,silence){
				//	if(err) console.log(err);	
				//	console.log(data);
				//});
				//console.log(data);
				//resend.send('success');
			},function(result,insert){
				res.send(result);
				res.end();
			}	
			]);
		}else{
			async.waterfall([
				function(insert){
					var result='';
					storedb.insert({
						s_idx:data.s_idx,
						name:data.name,
						lat:data.lat,
						lng:data.lng
						},function(err,doc){
							if(err) result=err;
							else result='success';
							insert(null,result);
					});
				},function(result,insert){
					res.send(result);
					res.end();
				}		
			]);
		}
	},
	searchData: function(con,data,res){
		//resend=res;
		console.log(data);
		if(con){
		async.waterfall([
			function(search){
				var result='';
				productdb.find({p_idx:data}).toArray(function(err,doc){
					
				result=doc;
				//console.log(result);
				search(null,result);
				});
			},
			function(result,search){
				res.send(result);
				res.end();
			}
		]);
		}else{
		async.waterfall([
			function(search){
				var result='';
				storedb.find({s_idx:data}).toArray(function(err,doc){
					result=doc;
					search(null,result);
				});
			},function(result,search){
				res.send(result);
				res.end();
			}		
		]);	
		}
	},
	initData:function(res){
		async.waterfall([
			function(init){
				var result='';
				productdb.find().toArray(function(err,doc){
					result=doc;
					console.log(result);
					init(null,result);
				});
				//product.find({},function(err,doc){
				//	if(err) 
				//		console.log('error ocuured in the database');
				//	result=doc;	
				//});
				//init(null,result);
			},function(result,init){
				res.send(result);
				console.log(result);
				res.end();
			}
		]);
	},
	productList:function(serial,res){
		async.waterfall([
			function(list){
				var result='';
				productdb.find({s_idx:serial}).toArray(function(err,doc){
					result=doc;
					list(null,result);
				});
			},function(result,list){
				res.send(result);
				res.end();
			}		
		]);    
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
