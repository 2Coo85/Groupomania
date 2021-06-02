module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('Post', {
        userId: {type: Sequelize.INTEGER, required: true, references: {
            model: 'users',
            key: 'id'
        }},
        username: {type: Sequelize.STRING},
        department: {type: Sequelize.STRING},
        title: {type: Sequelize.TEXT},
        imageUrl: {type: Sequelize.STRING, allowNull: true},
        postText: {type: Sequelize.TEXT, allowNull: true},
    })
    return Post
}


