import path from "path";
import express from "express";
import Product from "../models/productModel.js";
const Router = express.Router();
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js"

//Insert

Router.post(
  "/insert",
  upload.single("image"),
  async (req, res) => {
    console.log(req.body);
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      let product = new Product({
        productID: req.body.productID,
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        warantyPeriod: req.body.warantyPeriod,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      });
      await product.save();
      res.send("Product details uploaded successfully.");
    } catch (error) {
      res
        .status(400)
        .send("Error while uploading details. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

//Update
Router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
        productID: req.body.productID || product.productID,
        productName: req.body.productName || product.productName,
        price: req.body.price || product.price,
        description: req.body.description || product.description,
        warantyPeriod: req.body.capacity || product.capacity,
        image: result?.secure_url || product.image,
        cloudinary_id: result?.public_id || product.cloudinary_id,
    };
    product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(product);
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

//////////////////////////////////////

//Delete
Router.delete("/:id", async (req, res) => {
  try {
    // Find liveboard by id
    const product = await Product.findById(req.params.id);
    if (!product) throw Error("No file found");
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(product.cloudinary_id);
    // Delete liveboard from db
    const removed = await product.remove();
    if (!removed)
      throw Error("Something went wrong while trying to delete the file");
    res.json(product);
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

///////
Router.get("/:id", async (req, res) => {
  try {
    // Find liveboard by id
    const product = await Product.findById(req.params.id);
    if (product < 1) {
      return res.status(402).json({
          message: "No product data found",
      });
  } else {
      res.status(200).json({
          success: true,
          code: 200,
          data: product,
      });
  }
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});


export default Router;