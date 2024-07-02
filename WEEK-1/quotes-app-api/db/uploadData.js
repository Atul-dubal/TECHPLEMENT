require('dotenv').config()

const ConnectDB = require("./connect")
const quoteModel = require("./model/quotes")
const DATA = require("../data.json")
const start = async () => {
    try{
    await ConnectDB("mongodb+srv://atuldubal199:hNE40w8WvqNVsUYT@cluster0.fzxg1mv.mongodb.net/QUOTESAPI?retryWrites=true&w=majority&appName=Cluster0")
    await quoteModel.create(DATA).then(() => {

        console.log("success")
    })
}
catch(e){
console.log(e)
}
}


start()