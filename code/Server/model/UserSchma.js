//creating a collection

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type : String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    work: {
        type: String,
    },

    password: {
        type: String,
        required: true
    }
})
//model funtion takes collection name as singular, then 2nd argument would be structure to follow
const User = mongoose.model('user', UserSchema)

module.exports = User 