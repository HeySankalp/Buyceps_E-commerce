import Product from '../../models/product';
import connectdb from '../../middleware/dbConection';


const handler = async(req, res) => {
    if(req.method == "POST"){
        for (let i = 0; i < req.body.length; i++) {
            await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({success: "succussfully updated"})
    }else{
        res.status(400).json({failure:"Method not allowed"})
    }
}

export default connectdb(handler);