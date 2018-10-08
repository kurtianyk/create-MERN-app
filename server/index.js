import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import router from './routes';
import { MONGODB_URI, MONGODB_OPTIONS, PORT } from './config';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.use('/api', router);

// app.get('/api', (req, res) => {
//   res.send('Hello World!');
// });

mongoose.connect(MONGODB_URI, MONGODB_OPTIONS);

mongoose.connection.on('connected', () => {
  app.listen(PORT, () => {
    console.log('Server running at 4000 port');
  });
});
