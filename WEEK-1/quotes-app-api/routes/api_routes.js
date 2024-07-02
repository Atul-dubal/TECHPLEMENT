const express = require('express')
const { GetAllQuotes, SearchByAuthor } = require('../controllers/api_routes_controller')
const router = express.Router()

router.get('/',GetAllQuotes)
router.get('/author/:authorname',SearchByAuthor)


module.exports = router