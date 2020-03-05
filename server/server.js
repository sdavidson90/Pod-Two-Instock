const express = require("express");
const app = express();
const cors = require("cors");

const productRoutes = require("../server/routes/api/product");

PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
