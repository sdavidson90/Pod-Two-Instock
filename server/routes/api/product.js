const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");

const productsFile = __dirname + "/../../models/product.json";
const products = require(productsFile);

router.get("/", (req, res) => {
  const productsList = products.map(product => {
    return {
      id: product.id,
      description: product.description,
      ordered: product.ordered,
      reference: product.reference,
      last: product.last,
      location: product.location,
      quantity: product.quantity,
      categories: product.categories
    };
  });
  res.json(productsList);
});

router.get("/:id", (req, res) => {
  const found = products.some(product => {
    return product.id === req.params.id;
  });
  if (found) {
    const selectedProduct = products.filter(
      product => product.id === req.params.id
    );
    res.json(selectedProduct);
    console.log(selectedProduct);
  }
});

module.exports = router;
