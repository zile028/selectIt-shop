const express = require("express")
const UserModel = require("../model/userModel");
const router = express.Router()

function verifyToken(req, res, next) {
    
    if (req.headers.authorization) {
        next()
    } else {
        res.status(201).send({msg: "You must login."})
    }
}

/***** GET *****/
router.get("/addUser", require("../controlers/userControler/addUser"))
router.get("/allUsers", require("../controlers/userControler/getAllUsers"))
router.get("/:email", verifyToken, require("../controlers/userControler/getUser"))

/***** POST *****/
router.post("/register", require("../controlers/userControler/register"))
router.post("/login", require("../controlers/userControler/login"))

/***** PUT *****/
router.put("/activate/:id", require("../controlers/userControler/activateAccount"))


module.exports = router