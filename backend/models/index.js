// const sequelize = require('../config/dbConfig');
// const Sequelize = require('sequelize')

// const User = require('./user')
// const Post = require('./post')
// const Comment = require('./comments')

// const db = {}

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.users = (User)(sequelize, Sequelize);
// db.posts = (Post)(sequelize, Sequelize);
// db.comments = (Comment)(sequelize, Sequelize)

// db.users.hasMany(db.posts)
// db.users.hasMany(db.comments)

// db.posts.hasMany(db.comments)

// sequelize.sync({force: true})
// .then(result => {
//     console.log(result)
// }).catch(
//     (err) => {
//         console.log(err)
//     }
// )

// module.exports = db;

const Sequelize = require('sequelize')

const sequelize = new Sequelize('GMania', 'sa', 'Mania01', {
    dialect: 'mssql',
    server: '2COOLHP',
    instanceName: 'MSSQLSERVER'
})

sequelize.authenticate().then(
    () => {
        console.log('Connected to db')
    }
).catch(
    err => {
        console.log('Unable to connect: ', err)
    }
)
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./user')(sequelize, Sequelize)
db.posts = require('./post')(sequelize, Sequelize)
db.comments = require('./comments')(sequelize, Sequelize)

db.users.hasMany(db.posts, { foreignKey: 'userId' }, { onDelete: 'cascade' })
db.users.hasMany(db.comments, { foreignKey: 'userId' }, { onDelete: 'cascade' })
db.posts.hasMany(db.comments, { foreignKey: 'postId' }, { onDelete: 'cascade' })

db.comments.belongsTo(db.users, { foreignKey: 'userId' })
db.comments.belongsTo(db.posts, { foreignKey: 'postId' })
db.posts.belongsTo(db.users, { foreignKey: 'userId' })

module.exports = db