const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        min: 5,
        max: 20,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        min: 8,
        max: 40,
        required: true,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: " ",
    }
    
})

const UserModel =  mongoose.model('Users', userSchema)

module.exports = UserModel