var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose=require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var http=require('http');
var app = express();
var test=require('./routes/test');
var search=require('./routes/search');
var s_init=require('./routes/s_init');
var p_init=require('./routes/p_init');
var insert=require('./routes/insert');
var list=require('./routes/p_list');
var p_insert=require('./routes/p_insert');
var s_insert=require('./routes/s_insert');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/test',test);
app.use('/search',search);
app.use('/p_init',p_init);
app.use('/s_init',s_init);
app.use('/insert',insert);
app.use('/list',list);
app.use('/p_insert',p_insert);
app.use('/s_insert',s_insert);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
var port=9738;
var server=http.createServer(app).listen(port,function(){
	console.log('test');		
});
//mongoose.connect('mongodb://localhost:27017/MP3');
//var db= mongoose.connection;
//db.on('error',console.error.bind(console,'connection error:'));
//db.once('open',function callback(){
//	console.log('mongo db connection ok.');		
//});

module.exports = app;
