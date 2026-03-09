const express  = require("express");
const router = express.Router();

const {get, postBook} = require("../Controller/BookShelfController");

router.get("/getbook", get);
router.post("/postBook", postBook);

//admin routes
const {getAdmin, postAdmin, deleteAdmin, UpdateAdmin} = require("../Controller/AdminController")

router.get("/getAdmin", getAdmin);
router.post("/postAdmin", postAdmin);
router.delete("/deleteAdmin/:id", deleteAdmin);
router.put("/updateAdmin/:id", UpdateAdmin);


//user Routes

const {
    getuser,
    postUser,
    updateUser,
    deleteUser
} = require("../Controller/UserController");

router.get("/get", getuser);
router.post("/post", postUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);


const { addTask, FindTask } = require("../Controller/taskController");

router.post("/postTask", addTask);
router.get("/findTask", FindTask);

module.exports = router