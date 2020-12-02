const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userName: {type: 'String', required: true},
    department: {type: 'String', required: true},
    commentText: {type: 'String'},
    mediaUrl: {type: 'String'}
});

module.exports = mongoose.model('Comment', commentSchema);