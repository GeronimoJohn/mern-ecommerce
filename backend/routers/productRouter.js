const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const data = require("../data");
const Product = require("../models/productModel");

const productRouter = express.Router();

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

module.exports = productRouter;
