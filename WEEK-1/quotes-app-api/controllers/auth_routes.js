require("dotenv").config()
const UserModel = require("../db/model/userModel")

const UserSignUp = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // const { email, password } = req.body
    console.log(req.body);
    try {
        const data = await UserModel.create(req.body.formData)
        console.log(data)
        res.json({ msg: "Registration Successful", StatusCode: 200 })
    }
    catch (err) {
        console.log(err)
        let msg = "Registration UnSuccessful. Check Phone Number and Email Should be Unique"

        res.json({ msg: msg, StatusCode: 500 })
    }

}

const UserSignIn = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
        const { email, password } = req.body.formData
        const data = await UserModel.find({ email, password })
        // console.log(data)

        if (!data.length == 0) {
            let resData = {
                name: data[0].name,
                email: data[0].email,
                phone: data[0].phone
            }
            res.json({ msg: "Login Successful", StatusCode: 200, res: resData })
        } else {
            res.json({ msg: "Invalid Information", StatusCode: 500 })
        }
    }
    catch (err) {
        console.log(err);
        res.json({ msg: "Invalid Information", StatusCode: 500 })
    }
}

module.exports = { UserSignIn, UserSignUp }