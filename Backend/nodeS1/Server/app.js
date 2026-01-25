const express = require("express");
const app = express();
const products = require("./Router/ProductRoute");
app.use(express.json());

app.use("/api/products", products);

module.exports = app;