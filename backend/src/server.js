const express = require("express");
const connect = require("./configs/db");
const productController = require("./controllers/product.controller");

const app = express();
app.use(express.json());
app.use("/product", productController);

app.listen("2345", async function () {
  await connect();

  console.log("listening on port 2345");
});
