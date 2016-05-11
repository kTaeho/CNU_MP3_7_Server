var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
  var store_idx=req.query.s_idx;
  var product_idx=req.query.p_idx;
  
  console.log('request : '+store_idx);
  
//  res.send({'test':testValue,'test2':testValue2});
  res.end();
});

module.exports = router;
