//creating a collection

const mongoose = require('mongoose')


const instituteSchema = new mongoose.Schema({

    name: {
        type : String,
        required: true
    },

    refnum: {
        type: Number,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    fees: {
        type: Number,
        required: true
    },


    work: {
        type: String,
    },

})


const Insi = mongoose.model('insi', instituteSchema)

module.exports = Insi
