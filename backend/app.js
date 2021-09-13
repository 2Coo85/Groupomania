const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment')

const app = express();

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
app.use('/api/comments', commentRoutes)

module.exports = app;