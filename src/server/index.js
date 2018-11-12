import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import bodyParser from 'body-parser';
// import router from './routes';
import { MONGODB_URI, MONGODB_OPTIONS, PORT } from './config';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
// app.use('/api', router);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')));

mongoose.connect(MONGODB_URI, MONGODB_OPTIONS);

mongoose.connection.on('connected', () => {
  app.listen(PORT, () => {
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
