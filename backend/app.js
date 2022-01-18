const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect(  'mongodb+srv://tc3085:S6vK5mmykEizcnP7@cluster0.zuqab.mongodb.net/start?retryWrites=true&w=majority',
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

app.use(bodyParser.json());

// const Sequelize = require('sequelize')
// var sql = require('mssql/msnodesqlv8')
// var config = require('./middleware/dbConfig');

// console.log('starting sql...')
  
// const pool = new sql.ConnectionPool(config)

// pool.connect().then(
//   () => {
//     console.log('Database Connected')
//   }
// ). catch(
//   (err) => {
//     console.log('Error ' + err)
//   }
// )

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;