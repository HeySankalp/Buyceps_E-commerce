import User from '../../models/user';
import connectdb from '../../middleware/dbConection';
var CryptoJS = require("crypto-js");


const handler = async (req, res) => {
    let newUser;
    try {
        let { password, name, email } = req.body;
        let isUser = await User.findOne({ "email": email })
        if (!isUser) {
            var encryptedPass = CryptoJS.AES.encrypt(password, process.env.SALT_KEY).toString();
            newUser = new User({ "name": name, "email": email, "password": encryptedPass })
            await newUser.save()
            res.status(200).json({ success: true, message: "user created successfully" });
        } else {
            res.status(200).json({ success: false, message: "try again with different creds" })
        }
    } catch (error) {
        res.status(500).json({ message: "internal error" })
    }

}

export default connectdb(handler);