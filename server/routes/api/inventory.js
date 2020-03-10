const express = require("express");
const router = express.Router();
// const uuid = require("uuid/v4");
// const fs = require("fs");

const inventoryFile = __dirname + "/../../models/product.json";
const inventory = require(inventoryFile);

router.get("/", (req, res) => {
  res.json(inventory);
});

module.exports = router;
