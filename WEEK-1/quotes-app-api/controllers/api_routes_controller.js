const QuotesModel = require('../db/model/quotes')


// Get All Quotes In Database
const GetAllQuotes = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let myData = await QuotesModel.find()
    // console.log(myData.length)
    let randomNumber =await Math.floor(Math.random()*30)
    console.log(randomNumber)
    console.log(myData[randomNumber])
    if (myData.length == 0) {
        res.json({ msg: 'Currently Database Is Empty' })
    } else {
        res.json(myData[randomNumber])
    }
}


// Search Quotes By Author Name
const SearchByAuthor = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let AuthorName = req.params.authorname
    console.log(AuthorName)
    let myData = await QuotesModel.find({ author: { $regex:new RegExp('.*'+AuthorName.toLowerCase()+'.*',"i")} })
    console.log(myData)
    // if (myData.length == 0) {
    //     res.json({ msg: "No Quote Found For This Author" })
    // } else {
    //     res.json(myData)
    // }
    res.json(myData)
}
module.exports = { GetAllQuotes, SearchByAuthor }