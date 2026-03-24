const express = require("express");
const router = express.Router();

const {postUser, loginUser} = require("../Controller/BlogPostController");

router.post("/register", postUser);
router.post("/login", loginUser);

const { postBlog, getBlog, getBlogById } = require("../Controller/BlogPostController")

router.post("/postblog", postBlog)
router.get("/getblog", getBlog)
router.get("/getblog/:id", getBlogById)

module.exports = router