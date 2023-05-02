const express = require("express")
const router = express.Router()

//GET
router.get("/:number", require("../controlers/RandomControler/getRandomProducts"))


module.exports = router