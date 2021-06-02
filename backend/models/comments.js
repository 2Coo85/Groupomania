module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
        userId: {type: Sequelize.INTEGER, required: true, references:{
            model: 'User',
            key: 'id'
        }},
        username: {type: Sequelize.STRING, required: true},
        postId: {type: Sequelize.INTEGER, required: true, references: {
            model: 'Post',
            key: 'id'
        }},
        department: {type: Sequelize.STRING, required: true},
        commentText: {type: Sequelize.TEXT},
    })
    return Comment
}


