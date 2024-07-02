const mongoose = require("mongoose")
const { type } = require("os")

const QuotesSchema = new mongoose.Schema({
    quote:{
        type: String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Quote",QuotesSchema)