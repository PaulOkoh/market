import express from "express";
import Product from "../models/productModel.js";

const productRouter = express.Router();


productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
})



productRouter.get("/slug/:slug", async  (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Item not found" });
  }
});


productRouter.delete("/slug/:slug", async (req, res) => {
  try {
    const product = await Product.deleteOne({ slug: req.params.slug });
    if (product.deletedCount === 1) {
      res.send({ message: "Product deleted successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting product" });
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.send({ message: "Product deleted successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server Error" });
  }
});

productRouter.get("/:id", async (req, res) => {
  const product =  await Product.findById(req.params.id);
    if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Item not found" });
  }
});

productRouter.post("/", async (req, res) => {
  try {
    const { name, slug, price, countInStock, image, description } = req.body;
    const product = await Product.create({ name, slug, price, countInStock, image, description });
    res.status(201).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server Error" });
  }
});






export default productRouter;