const express  = require("express");
const router = express.Router();

const {
    getuser,
    postUser,
    updateUser,
    deleteUser
} = require("../Controller/UserController");


const {getAdmin, postAdmin} = require("../Controller/AdminController")

router.get("/getAdmin", getAdmin);
router.post("/postAdmin", postAdmin);

router.get("/get", getuser);
router.post("/post", postUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router