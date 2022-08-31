import Product from '../../models/product';
import connectdb from '../../middleware/dbConection';


const handler = async (req, res) => {
    console.log(req.body);
    let newProduct
    if (req.method == 'POST') {

        console.log(req.body);
        newProduct = new Product({
            slug: req.body.slug,
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            availableQty: parseInt(req.body.availableQty),
            price: parseInt(req.body.price)
        })
        await newProduct.save()
        res.status(200).json({ status:true, success: "succesfully saved" });
    } else {
        res.status(400).json({ error: "bad request" })
    }
}

export default connectdb(handler);