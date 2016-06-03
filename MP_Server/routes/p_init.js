var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var db=require('./db');
var async=require('async');
/* GET home page. */
router.get('/', function(req, res, next) {
		db.init_p_Data(res);
});

module.exports = router;
