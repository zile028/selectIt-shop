const express = require("express");
const UserModel = require("../model/userModel");
const router = express.Router();

/***** GET *****/
router.get("/addUser", require("../controlers/userControler/addUser"));
router.get("/allUsers", require("../controlers/userControler/getAllUsers"));
router.get("/:firstName", require("../controlers/userControler/getUser"));

/***** POST *****/
router.post("/register", require("../controlers/userControler/register"));

module.exports = router;
