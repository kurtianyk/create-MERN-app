export const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  keepAlive: 300000
};
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/create-MERN-app';
export const PORT = process.env.PORT || 4000;
