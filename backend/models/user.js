const db = require('../middleware/dbConfig')
const { Sequelize, DataTypes } = require('sequelize')

const User = db.define('user', {
    userId: {type: DataTypes.INTEGER},
    username: {type: DataTypes.STRING, required: true, unique: true},
    department: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, required: true, unique: true},
    phone: {type: DataTypes.INTEGER},
    password: {type: DataTypes.STRING, required: true}
});

module.exports = User