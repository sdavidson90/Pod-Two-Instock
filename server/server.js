const express = require("express");
const app = express();
const cors = require("cors");

<<<<<<< HEAD
const productRoutes = require("./routes/api/product");
=======
const productRoutes = require("../server/routes/api/product");
const locationsRoutes = require("../server/routes/api/locations");
>>>>>>> e8f26ee1bddff3516ac14b1d7ac9fa040aaf6917

PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
<<<<<<< HEAD
=======
app.use("/api", locationsRoutes);
>>>>>>> a18ebe40d43e94cb341455d8be0cb717c82dc224

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
