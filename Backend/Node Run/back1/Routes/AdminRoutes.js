const express = require("express")
const router = express.Router();

const {getAdmin, postAdmin} = require("../Controller/AdminController")

router.get("/get", getAdmin);
router.post("/post", postAdmin);

module.exports = router