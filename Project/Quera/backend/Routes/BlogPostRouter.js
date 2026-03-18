const express = require("express");
const router = express.Router();

const { postBlog, getBlog } = require("../Controller/BlogPostController")

router.post("/postblog", postBlog)
router.get("/getblog", getBlog)

module.exports = router