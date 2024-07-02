require('dotenv').config()
const express = require("express")
const Apirouter = require('../routes/api_routes')
const AuthRouter = require("../routes/auth_routes")
const ConnectDB = require('../db/connect')
const app = express()
const PORT = process.env.PORT || 2206

var cors = require('cors');
app.use(cors())

app.use(express.json());
// HOME ROUTE
app.get('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({msg:"Welcome To Techplement Quotes API"})
})

// API ROUTES
app.use('/api/quotes',Apirouter)
app.use("/auth",AuthRouter)

const start=async ()=>{
    await ConnectDB(process.env.MONGOOSE_URL)
    app.listen(PORT,()=>{
        console.log(`Server is Started At Port ${PORT} http://localhost:${PORT}`)
    })
}

start()