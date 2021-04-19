const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String, required: true},
    postId: {type: String},
    department: {type: String, required: true},
    commentText: {type: String},
});

module.exports = mongoose.model('Comments', commentSchema);