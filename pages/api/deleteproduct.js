import Product from '../../models/product';
import connectdb from '../../middleware/dbConection';

const handler = async (req, res) => {

    try {
        if (req.method == "DELETE") {
            await Product.deleteOne({ slug: req.body.slug })
            res.status(200).json({ status: true, message: "product deleted" })
        } else {
            res.status(304).json({ status: false, message: "not allowed" })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "internal server error" })
    }

}
export default connectdb(handler);