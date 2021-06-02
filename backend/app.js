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

app.get('/', (req, res) => {
  var sql = require('mssql/msnodesqlv8')

  var config = {
    user: 'sa',
    password: 'Mania01',
    server: '2COOLHP\\SQLEXPRESS',
    database: 'GroupoMania',
    dialet: 'mssql',
    driver: 'msnodesqlv8'
  }
  console.log('starting sql...')

  const pool = new sql.ConnectionPool(config)
  pool.connect().then(
    () => {
      pool.request().query('select * from Posts', (err, result) => {
        if (err) {
          res.send(err)
        } else {
          return res.json({
            data: result.recordset
          })
        }
      })
      sql.close()
    }
  )
  console.log('ending sql')
})

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comments', commentRoutes)

module.exports = app;