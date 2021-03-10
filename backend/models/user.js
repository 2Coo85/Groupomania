const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    userId: {type: String},
    username: {type: String, required: true, unique: true},
    department: {type: String},
    email: {type: String, required: true, unique: true},
    phone: {type: Number},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);