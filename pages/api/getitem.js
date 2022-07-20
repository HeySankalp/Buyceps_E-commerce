import Product from '../../models/product';
import connectdb from '../../middleware/dbConection';

const handler = async (req, res) => {
    console.log(req);
    try {
        const productItem = await Product.findOne({ slug: req.body.slug })
        if(productItem){
            res.status(200).json({ productItem })
        }else{
            res.status(404).json({ error : "item not found" })
        }

    } catch (error) {
        console.error(error)
    }
}

export default connectdb(handler);