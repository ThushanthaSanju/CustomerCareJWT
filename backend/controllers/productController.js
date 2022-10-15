import Product from "../models/productModel.js";

//for add or fetch
export const getProductController = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).send(products);

    } catch(error) {
        console.log(error);
    }
}

//for update
export const updateProductController = async (req, res) => {
    try {

        await Product.findOneAndUpdate({_id: req.body.productId}, req.body, {new: true})
        res.status(201).json("Equipment Updated!");
    } catch(error) {
        res.status(400).send(error);
        console.log(error);
    }
}

//for delete
export const deleteProductController = async (req, res) => {
    try {

        await Product.findOneAndDelete({_id: req.body.productId})
        res.status(200).json("LiveBoard Deleted!");
    } catch(error) {
        res.status(400).send(error);
        console.log(error);
    }
}