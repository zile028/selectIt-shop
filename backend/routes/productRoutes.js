const express = require("express")
const router = express.Router()

router.get("/:limit/:page", require("../controlers/productControler/pagination"))
router.get("/:category/:limit/:page", require("../controlers/productControler/paginationCategory"))
router.get("/:id", require("../controlers/productControler/getSingleProduct"))
router.post('/addProduct', require('../controlers/productControler/addProduct'));
module.exports = router