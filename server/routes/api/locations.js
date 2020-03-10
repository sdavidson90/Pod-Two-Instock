const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const fs = require("fs");

const locationsFile = __dirname + "/../../models/instock.json";
const locations = require(locationsFile);

router.get("/api", (req, res) => {
  const locationsList = locations.map(location => {
    return {
      warehouseId: location.warehouseId,
      warehouseName: location.warehouseName,
      warehouseNumber: location.warehouseNumber,
      address: location.address,
      contactName: location.contactName,
      location: location.location,
      orderQuantity: location.quantity,
      categories: location.categories
    };
  });
  res.json(locationsList);
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
  const newlocations = {
    //how to populate the right info because the data is nested?
    id: uuid(),
    description: req.body.description,
    ordered: req.body.ordered,
    reference: req.body.reference,
    last: req.body.last,
    location: req.body.location,
    quantity: req.body.quantity,
    categories: req.body.categories
  };
  locations.push(newlocations);
  writeJSONFile(locationsFile, locations);
  res.json(locations);
});

module.exports = router;
