import mongoose from "mongoose";

// schema for creating products
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true, 
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: String,
        required:true,
    },
    old_price: {
        type: String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    available: {
        type: Boolean,
        default: true,
    },

}, {timestamps: true});

const productModel = mongoose.model("Product", productSchema);
export default productModel;