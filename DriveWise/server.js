const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors')

const authRouter = require('./routes/auth');
const userRouter = require('./routes/users')
const listingsRouter = require('./routes/listings');
const reviewsRouter = require('./routes/reviews');
const maintenanceRouter = require('./routes/maintenance');

const PORT = process.env.PORT || 5174
const db = require('./db')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/', userRouter);
app.use('/', listingsRouter);
app.use('/', reviewsRouter);
app.use('/', maintenanceRouter);

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.use(function(req, res, next) {
  next(createError(404));
});
app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

