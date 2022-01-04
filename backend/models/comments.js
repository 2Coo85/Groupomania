// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConfig');

// const Comment = sequelize.define('Comments', {
//     id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
//     // userId: {type: Sequelize.INTEGER, required: true, references:{
//     //     model: 'User',
//     //     key: 'id'
//     // }, allowNull: false},
//     username: {type: Sequelize.STRING, required: true, allowNull: false},
//     // postId: {type: Sequelize.INTEGER, required: true, references: {
//     //     model: 'Post',
//     //     key: 'id'
//     // }, allowNull: false},
//     department: {type: Sequelize.STRING, required: true, allowNull: false},
//     commentContent: {type: Sequelize.TEXT, allowNull: false},
// });

// module.exports = Comment;

module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comments', {
        id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        // userId: {type: Sequelize.INTEGER, required: true, references:{
        //     model: 'User',
        //     key: 'id'
        // }, allowNull: false},
        username: {type: Sequelize.STRING, required: true, allowNull: false},
        // postId: {type: Sequelize.INTEGER, required: true, references: {
        //     model: 'Post',
        //     key: 'id'
        // }, allowNull: false},
        department: {type: Sequelize.STRING, required: true, allowNull: false},
        commentContent: {type: Sequelize.TEXT, allowNull: false},
    })
    Comment.sequelize.sync()
    return Comment
}

