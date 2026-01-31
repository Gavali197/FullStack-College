const express  = require("express");
const router = express.Router();

const {
    getuser,
    postUser
} = require("../Controller/UserController");
const { get } = require("mongoose");

router.get("/", getuser);
router.post("/post", postUser);

module.exports = router