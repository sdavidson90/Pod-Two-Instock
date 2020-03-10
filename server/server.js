const express = require("express");
const app = express();
const cors = require("cors");

const productRoutes = require("../server/routes/api/product");
const locationsRoutes = require("../server/routes/api/locations");
const inventoryRoutes = require("./routes/api/inventory");

PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/locations", locationsRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/product", productRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
