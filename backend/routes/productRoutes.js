const express = require("express")
const router = express.Router()

router.get("/:limit/:page", require("../controlers/productControler/pagination"))
router.get("/:category/:limit/:page", require("../controlers/productControler/paginationCategory"))
router.post("/:id", require("../controlers/productControler/getSingleProduct"))

module.exports = router