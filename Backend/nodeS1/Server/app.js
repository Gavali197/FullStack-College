const express = require("express");
const app = express();
const products = require("./Router/ProductRoute");
app.use(express.json());

app.use("/api/products", products);

const errHandle = require("./Middleware/errorHandler");
app.use(errHandle);

module.exports = app;