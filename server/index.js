const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');

// const router = require('./routes');
// const { MONGODB_URI, MONGODB_OPTIONS, PORT } = require('./config');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
// app.use('/api', router);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')));

// mongoose.connect(MONGODB_URI, MONGODB_OPTIONS);

mongoose.connection.on('connected', () => {
  app.listen(process.env.PORT, () => {
    console.log('Server running at 4000 port');
  });
});

// mongoose.set('useCreateIndex', true);
// mongoose.connect(MONGODB_URI, MONGODB_OPTIONS);

// mongoose.connection.on('error', (err) => {
//   console.error('Mongoose failed to connect', err);

//   mongoose.disconnect();
// });

// mongoose.connection.on('connected', () => {
//   app.listen(PORT);
// });
