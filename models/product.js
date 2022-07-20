const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    availableQty: { type: Number, required: true }
}, {
    timestamps: true
})

mongoose.models ={}
export default mongoose.model("Product", productSchema);