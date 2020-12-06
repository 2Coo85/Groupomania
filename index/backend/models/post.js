const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type: 'String'},
    userName: {type: 'String', required: true},
    department: {type: 'String', required: true},
    title: {type: 'String', required: true},
    mediaUrl: {type: 'String'},
    postText: {type: 'String'},
    commentsPosted: {type: 'Number'},
    usersCommented: {type: [String]}
});

module.exports = mongoose.model('Post', postSchema);