const Sequelize = require('sequelize')
const config = require('../config/dbConfig')

const sequelize = new Sequelize(config.database, config.user, config.password,{
    server: config.server,
    dialect: 'mssql',
    dialectOptions: {
        instanceName: config.instanceName
    }
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