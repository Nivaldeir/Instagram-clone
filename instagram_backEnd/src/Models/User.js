const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    avata:{
        type:String,
        required: true,
    },
    site:{
        type: String,
    }

})

module.exports = mongoose.model('User', Schema)