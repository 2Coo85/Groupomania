const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    userId: {type: 'String'},
    userName: {type: 'String', required: true},
    department: {type: 'String', required: true},
    commentText: {type: 'String'},
});

module.exports = mongoose.model('Comments', commentSchema);