const express = require("express")
const UserModel = require("../model/userModel");
const router = express.Router()

router.get("/addUser", require("../controlers/userControler/addUser"))
router.get("/allUsers", require("../controlers/userControler/getAllUsers"))
router.get("/:firstName", require("../controlers/userControler/getUser"))


module.exports = router