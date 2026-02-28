const express  = require("express");
const router = express.Router();

const {
    getuser,
    postUser,
    updateUser,
    deleteUser
} = require("../Controller/UserController");


const {getAdmin, postAdmin, deleteAdmin, UpdateAdmin} = require("../Controller/AdminController")

router.get("/getAdmin", getAdmin);
router.post("/postAdmin", postAdmin);
router.delete("/deleteAdmin/:id", deleteAdmin);
router.put("/updateAdmin/:id", UpdateAdmin);

router.get("/get", getuser);
router.post("/post", postUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router