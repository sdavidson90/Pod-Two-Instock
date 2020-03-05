const express = require("express");
const app = express();
const cors = require("cors");

const productsFile = __dirname + "/models/instock.json";
const products = require(productsFile);

const productRoutes = require("../server/routes/api/product");

PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  console.log(products);
  res.json(products);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
