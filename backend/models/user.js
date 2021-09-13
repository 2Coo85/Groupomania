const Post = require('./post')
const Comment = require('./comments')
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    var User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    department: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, required: true, allowNull: false}
});

User.associate = () => {
    User.hasMany(Post, {
        foreignKey: 'userId',
        sourceKey: 'id'
    });
    User.hasMany(Comment, {
        foreignKey: 'userId',
        sourceKey: 'id'
    })
}
User.sequelize.sync({ alter: true })
return User
}