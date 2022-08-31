import User from '../../models/user';
import connectdb from '../../middleware/dbConection';
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == 'POST') {
        let { email, password } = req.body
        let user = await User.findOne({ "email": email });
        if (user) {
            var bytes = CryptoJS.AES.decrypt(user.password, process.env.SALT_KEY);
            var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
            if (decryptedPass == password) {
                var token = jwt.sign({ name: user.name, email: user.email, password: user.password }, process.env.SALT_KEY);
                res.status(200).json({ status: true, userToken: token,username: user.name ,isAdmin:user.isadmin});
            } else {
                res.status(401).json({ status: false, error: "wrong credentials" })
            }
        } else {
            res.status(404).json({ status: false, error: "user not found" })
        }
    }
}

export default connectdb(handler);

