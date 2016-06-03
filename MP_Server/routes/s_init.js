var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var db=require('./db');
//mongoose.connect('mongodb://localhost:27017/MP3');
//var MongoClient = require('mongodb').MongoClient;
//var Server = require('mongodb').Server;
//var mongoclient = new MongoClient(new Server('localhost',27017,{'native_parser':true}));
//var db = mongoclient.db('MP3');
//var db=mongoose.connection;
var async=require('async');
/* GET home page. */
router.get('/', function(req, res, next) {
		var lat=req.query.lat;
		var lng=req.query.lng;
		db.init_s_Data(lat,lng,res);
});
module.exports = router;
