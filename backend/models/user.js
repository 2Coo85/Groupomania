// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConfig')

// const User = sequelize.define('Users', {
//     id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
//     username: {type: Sequelize.STRING, unique: true, allowNull: false},
//     department: {type: Sequelize.STRING, allowNull: false},
//     email: {type: Sequelize.STRING, unique: true, allowNull: false},
//     phone: {type: Sequelize.STRING, allowNull: false},
//     password: {type: Sequelize.STRING, required: true, allowNull: false}
// });

// module.exports = User;

// const Post = require('./post')
// const { Sequelize } = require('sequelize')

// module.exports = (sequelize) => {

//     var User = sequelize.define('Users', {
//     id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
//     username: {type: Sequelize.STRING, allowNull: false},
//     department: {type: Sequelize.STRING, allowNull: false},
//     email: {type: Sequelize.STRING, allowNull: false},
//     phone: {type: Sequelize.STRING, allowNull: false},
//     password: {type: Sequelize.STRING, required: true, allowNull: false}
// });

// User.associate = () => {
//     User.hasMany(Post, {
//         foreignKey: 'userId',
//         sourceKey: 'id'
//     });
// }
// User.sequelize.sync({ alter: true })
// return User
// }

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    department: {type: String, required: true},
    phone: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);