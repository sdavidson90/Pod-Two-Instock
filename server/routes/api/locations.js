const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const fs = require("fs");

const locationsFile = __dirname + "/../../models/instock.json";
const locations = require(locationsFile);

router.get("/", (req, res) => {
  res.json(locations);
});

router.get("/:id", (req, res) => {
  const found = locations.some(location => {
    return location.id === req.params.id;
  });
  if (found) {
    const selectedlocations = locations.filter(
      locations => locations.id === req.params.id
    )[0];
    res.json(selectedlocations);
    console.log(selectedlocations);
  } else {
    res
      .status(400)
      .json({ errorMesage: `video with ID:${req.params.id} not found` });
  }
});

module.exports = router;
