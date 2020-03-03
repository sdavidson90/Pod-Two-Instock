const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const fs = require("fs");

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

function writeJSONFile(filename, content) {
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

router.post("/", (req, res) => {
  const newProduct = {
    id: uuid(),
    description: req.body.description,
    ordered: req.body.ordered,
    reference: req.body.reference,
    last: req.body.last,
    location: req.body.location,
    quantity: req.body.quantity,
    categories: req.body.categories
  };
  products.push(newProduct);
  writeJSONFile(productsFile, products);
  res.json(products);
});

module.exports = router;
