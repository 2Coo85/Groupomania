// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConfig');

// const Post = sequelize.define('Posts', {
//     id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
//     // userId: {type: Sequelize.INTEGER, required: true, references: {
//     //     model: 'User',
//     //     key: 'id'
//     // }, allowNull: false},
//     username: {type: Sequelize.STRING, allowNull: false},
//     department: {type: Sequelize.STRING, allowNull: false},
//     title: {type: Sequelize.TEXT, allowNull: false},
//     imageUrl: {type: Sequelize.STRING, allowNull: true},
//     postContent: {type: Sequelize.TEXT, allowNull: true},
// });

// module.exports = Post;

const Comment = require('./comments')

module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('Post', {
        id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        // userId: {type: Sequelize.INTEGER, required: true, references: {
        //     model: 'User',
        //     key: 'id'
        // }, allowNull: false},
        username: {type: Sequelize.STRING, allowNull: false},
        department: {type: Sequelize.STRING, allowNull: false},
        title: {type: Sequelize.TEXT, allowNull: false},
        imageUrl: {type: Sequelize.STRING, allowNull: true},
        postContent: {type: Sequelize.TEXT, allowNull: true},
    });
    Post.associate = () => {
        Post.hasMany(Comment, {
            foreignKey: 'postId',
            sourceKey: 'id'
        })
    }
    Post.sequelize.sync({ alter: true })
    return Post
}

