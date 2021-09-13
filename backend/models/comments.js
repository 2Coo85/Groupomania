module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
        id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        userId: {type: Sequelize.INTEGER, required: true, references:{
            model: 'User',
            key: 'id'
        }, allowNull: false},
        username: {type: Sequelize.STRING, required: true, allowNull: false},
        postId: {type: Sequelize.INTEGER, required: true, references: {
            model: 'Post',
            key: 'id'
        }, allowNull: false},
        department: {type: Sequelize.STRING, required: true, allowNull: false},
        commentText: {type: Sequelize.TEXT, allowNull: false},
    })
    Comment.sequelize.sync({ force: true })
    return Comment
}


