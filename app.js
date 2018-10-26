var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var exphbs = require('express-handlebars');
var cors = require('cors');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var fileUpload = require('express-fileupload');


var mysql = require('./db');

// models
var User = require('./models/user.js');

var indexRouter = require('./routes/index');
var foreasRouter = require('./routes/foreas');
var adminRouter = require('./routes/admin');
var categRouter = require('./routes/category');
var progrRouter = require('./routes/program');
var newsRouter  = require('./routes/news');
var filesRouter = require('./routes/file');
var settingsRouter = require('./routes/settings');

// WYSIWYG Request Handler
var froalaHandler = require('./routes/froala');

var app = express();
app.use(favicon(path.join(__dirname,'public','images', 'favicon.ico')));

// view engine setup
app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: require("./helpers/handlebars.js").helpers, // same file that gets used on our client
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/" // same as default, I just like to be explicit
}));
app.set("view engine", "hbs");

// database connection
mysql.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + mysql.threadId);
});

app.set('views', path.join(__dirname, 'views'));


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'somerandomstring',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    maxAge: 60000
  }
}));
// Passport init
app.use(passport.initialize());
app.use(passport.session());
// Connect Flash
app.use(flash());
// Upload module
app.use(fileUpload());


// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));


// Global Vars
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.errors = req.flash('errors');
  res.locals.user = req.user || null;
  res.locals.isAuthenticated = req.isAuthenticated();
  // res.locals.username = req.session.passport.user;
  next();
});



app.use('/', indexRouter);
app.use('/foreas', foreasRouter);
app.use('/admin', adminRouter);
app.use('/admin/category', categRouter);
app.use('/admin/program', progrRouter);
app.use('/admin/news', newsRouter);
app.use('/admin/file', filesRouter);
app.use('/admin/settings', settingsRouter);
app.use('/admin/froala', froalaHandler);
// app.get('/froala/load_images', froalaHandler);


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {

    req.checkBody('username', 'Το Username είναι υποχρεωτικό').notEmpty();
    req.checkBody('password', 'Το Password είναι υποχρεωτικό').notEmpty();
    req.checkBody('password', 'Το Password πρέπει να είναι τουλάχιστον 4 χαρακτήρες').isLength({min:4});

    var errors = req.validationErrors();

    if(errors)
    {
      return done(null, false, req.flash(errors));
    }

    process.nextTick(function() {
      User.getUser(username, password, function(err, results, fields) {
        if (err) {
          done(err)
        };
        if (results.length === 0) {
          done(null, false, req.flash('error_msg', 'Λανθασμένα στοιχεία'));
        } else {
          return done(null, {
            id: results[0].ID,
            username: results[0].USERNAME
          });
        }
      });
    });
  }
));


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
