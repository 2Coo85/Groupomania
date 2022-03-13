const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String, required: true},
    department: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, index: true, required: true},
    password: {type: String, required: true},
    token: {type: String}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);