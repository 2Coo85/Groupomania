const Sequelize = require('sequelize')
const config = require('../middleware/dbConfig')

const sequelize = new Sequelize({
    server: config.server,
    database: config.database,
    user: config.user,
    password: config.password,
    dialect: 'mssql'
})

const database = {}

database.Sequelize = Sequelize
database.sequelize = sequelize

database.users = require('./user')(sequelize, Sequelize)
database.posts = require('./post')(sequelize, Sequelize)
database.comments = require('./comments')(sequelize, Sequelize)

database.users.hasMany(database.posts, { foreignKey: 'userId' }, { onDelete: 'cascade' })
database.users.hasMany(database.comments, { foreignKey: 'userId' }, { onDelete: 'cascade' })
database.posts.hasMany(database.comments, { foreignKey: 'postId' }, { onDelete: 'cascade' })

database.comments.belongsTo(database.users, { foreignKey: 'userId' })
database.comments.belongsTo(database.posts, { foreignKey: 'postId' })
database.posts.belongsTo(database.users, { foreignKey: 'userId' })

module.exports = database