var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
//mongoose.createConnection('mongodb://localhost:27017/test');
var db=mongoose.connection;
var async=require('async');
var distance=require('./measure_dis');
/* GET home page. */
router.get('/', function(req, res, next) {
	distance.calcDistance(36.3692413,127.3457176,24.234,123.111);
	res.end();
});
module.exports = router;
