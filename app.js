var createError = require('http-errors');
var express = require('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
var path = require('path');
const exphbs = require ('express-handlebars');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./config/database');
const connectDB = require ('./config/database');
const favicon = require ('serve-favicon');


dotenv.config({path: './config/config.env'});

connectDB()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const hotelRouter = require ('./routes/hotel');
const testRouter = require ('./routes/test')
const ratesRouter = require('./routes/rates')
const calendarRouter = require ('./routes/calendars')
const roomsRouter = require ('./routes/rooms')

var app = express();

//Setup Favicon
app.use(favicon(path.join(__dirname, 'favicon.ico')))

// Helpers import
const {formatDate, ifCond, formatDate2, forEach, stripTags} = require ('./helpers/hbs')


// view engine setup
// app.engine('.hbs', exphbs({
//   helpers : {
//     formatDate
//   }
// }));

app.engine('.hbs', 
exphbs({
  helpers : {   
      formatDate,
      ifCond,
      formatDate2,
      forEach,
      stripTags
}, 
defaultLayout: 'layout', 
extname: '.hbs'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hotel', hotelRouter);
app.use('/test', testRouter );
app.use('/rates', ratesRouter);
app.use('/calendar', calendarRouter);
app.use('/rooms', roomsRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
