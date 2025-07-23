
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength: [3, "username must be atleast 3 characters long"]

    },

    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[13, "email must be atleast 10 characters long"]
    },

    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength: [8, "password must be 8 characters long"]
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user