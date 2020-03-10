const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const fs = require("fs");

const productsFile = __dirname + "/../../models/instock.json";
const products = require(productsFile);

router.post("/", (req, res) => {
  const productsList = products.map(product => {
    return {
<<<<<<< HEAD
      id: product.id,
      product: product.product,
=======
      orderId: product.warehouseId,
>>>>>>> a18ebe40d43e94cb341455d8be0cb717c82dc224
      description: product.description,
      orderedBy: product.ordered,
      reference: product.reference,
      last: product.last,
      location: product.location,
      orderQuantity: product.quantity,
      categories: product.categories
    };
  });
<<<<<<< HEAD
  res.json(productsList);
  // const productsList = products.map(product => {
  //   return {
  //     orderId: product.inventory.orderHistory[0].orderId,
  //     description: product.inventory.description,
  //     orderedBy: product.inventory.orderHistory[0].orderedBy,
  //     reference: product.inventory.orderHistory[0].reference,
  //     last: product.inventory.orderHistory[0].last,
  //     location: product.inventory.location,
  //     orderQuantity: product.inventory.orderHistory[0].orderQuantity,
  //     categories: product.categories
  //   };
  // });
=======
>>>>>>> a18ebe40d43e94cb341455d8be0cb717c82dc224
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

router.get("/", (req, res) => {
  const newProduct = {
    //how to populate the right info because the data is nested?
    productId: uuid(),
    description: req.body.description,
    orderedBy: req.body.ordered,
    reference: req.body.reference,
    lastOrdered: req.body.last,
    location: req.body.location,
    quantity: req.body.quantity,
    categories: req.body.categories
  };
  products.push(newProduct);
  writeJSONFile(productsFile, products);
  res.json(products);
});

module.exports = router;
