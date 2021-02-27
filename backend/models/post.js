const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String},
    department: {type: String},
    title: {type: String},
    mediaUrl: {type: String},
    postText: {type: String},
    usersCommented: {type: [String]}
});

module.exports = mongoose.model('Post', postSchema);