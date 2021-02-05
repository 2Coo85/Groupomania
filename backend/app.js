const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');

const app = express();

mongoose.connect(
    'mongodb+srv://tc3085:S6vK5mmykEizcnP7@cluster0.zuqab.mongodb.net/vue-cli-service?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/media', express.static(path.join(__dirname, 'media')));

app.use(bodyParser.json());

app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comments', commentRoutes);

module.exports = app;