import Product from '../../models/product';
import connectdb from '../../middleware/dbConection';


const handler = async(req, res) => {
    let newProduct
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            newProduct = new Product({
                slug: req.body[i].slug,
                title: req.body[i].title,
                description: req.body[i].description,
                image: req.body[i].image,
                category: req.body[i].category,
                availableQty: req.body[i].availableQty
            })
            await newProduct.save()
        }
        res.status(200).json({success :"succesfully saved"});
    } else {
        res.status(400).json({ error: "bad request" })
    }
}

export default connectdb(handler);