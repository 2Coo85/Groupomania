const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String},
    department: {type: String, required: true},
    title: {type: String, required: true},
    imageUrl: {type: String},
    postText: {type: String},
    created : {type : Date}
}, { collection: 'posts' }
);

module.exports = mongoose.model('Post', postSchema);