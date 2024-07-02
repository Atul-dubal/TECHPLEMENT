const { log } = require("console")
const mongoose = require("mongoose")

const ConnectDB = (mongoose_url)=>{
    return mongoose.connect(mongoose_url).then(()=>{
        log("DB Connected")
    })
}

module.exports = ConnectDB