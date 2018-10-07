const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoDBConfig = require('./db/config');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect(mongoDBConfig.uri, mongoDBConfig.options);

mongoose.connection.on('connected', () => {
  app.listen(PORT, () => {
    console.log('Server running at 4000 port');
  });
});
