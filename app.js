const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const homeRouter = require('./routes/Home');
const usersRouter = require('./routes/Users');
const loginRouter = require('./routes/Login');
const signupRouter = require('./routes/Signup');
const storiesRouter = require('./routes/Stories');
const createstoryRouter = require('./routes/Create-Story');
const logoutRouter = require('./routes/logout')
const aboutusRouter = require('./routes/AboutUs')
const categoriesRouter = require('./routes/Categories')
const { restoreUser } = require('./auth')

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret: 'superSecret',
    store,
    saveUninitialized: false,
    resave: false,
  })
);
app.use(restoreUser)
// create Session table if it doesn't already exist
store.sync();

app.use('/Login', loginRouter);
app.use('/Signup', signupRouter);
app.use('/', homeRouter);
app.use('/Users', usersRouter);
app.use('/Stories', storiesRouter);
app.use('/Create-Story', createstoryRouter);
app.use('/Categories', categoriesRouter);
app.use('/logout', logoutRouter)
app.use('/AboutUs', aboutusRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
