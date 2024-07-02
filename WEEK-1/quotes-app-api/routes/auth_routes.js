const express = require('express')
const { UserSignUp, UserSignIn } = require('../controllers/auth_routes')
const router = express.Router()

router.post('/signup',UserSignUp)
router.post('/signin',UserSignIn)


module.exports = router