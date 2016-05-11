var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var testValue=req.query.test;
  console.log('request : '+testValue);
  res.writeHead(200,{'Content-Type':'text/html'});
  res.send('test');
  res.end();
});

module.exports = router;
