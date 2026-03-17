const express = require("express");
const router = express.Router();

const { postBlog } = require("../Controller/BlogPostController")

router.post("/postblog", postBlog)

module.exports = router