const express = require("express");
const router = express.Router();

const {
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
} = require("../controller/ProductConttroller");

// const { route } = require("../app");

router.get("/", getProduct);
router.post("/add", addProduct);
router.delete("/delete", deleteProduct);
router.put("/update", updateProduct);

module.exports = router;