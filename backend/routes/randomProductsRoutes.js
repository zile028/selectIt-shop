const express = require("express")
const router = express.Router()

//GET
router.get("/:number", require("../controlers/RandomProductsControler/getRandomProducts"))


module.exports = router