var express = require('express');
var router = express.Router();
var db=require('./db');
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
  var store_idx=req.query.s_idx;
  db.productList(store_idx,res);
//  res.send({'test':testValue,'test2':testValue2});
  //res.end();
});

module.exports = router;
