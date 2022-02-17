const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /^.*@.*\..*$/,
        required: true         
    },
    password: {
        type: String,
        required: true,
        minlenght: 1
    }
})
module.exports = mongoose.model('users', userSchema)