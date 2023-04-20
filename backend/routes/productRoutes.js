const express = require("express")
const router = express.Router()

router.get("/:limit/:page", require("../controlers/productControler/pagination"))
router.post("/:id", require("../controlers/productControler/getSingleProduct"))

module.exports = router