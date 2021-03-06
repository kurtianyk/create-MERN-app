const express = require('express');
const helmet = require('helmet');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('mongoose');
const routes = require('./routes/index.route');

require('dotenv-safe').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
const APP_HOST = process.env.APP_HOST || 'localhost';
const APP_PORT = process.env.APP_PORT || 3001;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.disable('etag');

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('dist'));

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, `../${isProduction ? 'dist' : 'client'}/index.html`)));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.sendStatus(err.status || 500);
});

mongoose.set('useCreateIndex', true);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  keepAlive: 300000,
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose failed to connect', err);

  mongoose.disconnect();
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected successful');
  app.listen(APP_PORT, APP_HOST, () => {
    console.log(`Server running at http://${APP_HOST}:${APP_PORT}`);
  });
});
