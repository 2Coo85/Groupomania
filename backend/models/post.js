const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String, required: true},
    title: {type: String, required: true},
    department: {type: String, required: true},
    content: {type: String},
    file: {type: String}
});

module.exports = mongoose.model('Post', postSchema);