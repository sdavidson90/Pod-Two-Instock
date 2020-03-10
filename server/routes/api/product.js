const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const fs = require("fs");

const productsFile = __dirname + "/../../models/product.json";
const products = require(productsFile);

router.get("/:id", (req, res) => {
  res.json(products);
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
    inventoryId: uuid(),
    productId: uuid(),
    description: req.body.description,
    orderedBy: req.body.ordered,
    reference: req.body.reference,
    lastOrdered: req.body.last,
    location: req.body.location,
    quantity: req.body.quantity
  };
  products.push(newProduct);
  writeJSONFile(productsFile, products);
  res.json(products);
});

module.exports = router;
