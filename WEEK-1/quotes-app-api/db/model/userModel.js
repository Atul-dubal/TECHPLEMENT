const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
UserSchema.plugin(uniqueValidator);
module.exports = new mongoose.model('User',UserSchema)