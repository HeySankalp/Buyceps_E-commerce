import Product from '../../models/product';
import connectdb from '../../middleware/dbConection';

const handler =  async(req, res) => {

    const allProducts = await Product.find()

    res.status(200).json({allProducts})
}

export default connectdb(handler);