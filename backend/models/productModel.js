import mongoose from "mongoose";

//for create table into db
const productSchema = new mongoose.Schema({

    productID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    warantyPeriod: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    cloudinary_id: { 
        type: String 
    },
    created_at: {
        type: Date, default: Date.now()
    },

}, {
    //for date
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;
