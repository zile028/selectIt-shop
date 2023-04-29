const express = require("express")
const isValidId = require("../middelware/IsValidId");
const router = express.Router()

router.get("/:limit/:page", require("../controlers/productControler/pagination"))
router.get("/:category/:limit/:page", require("../controlers/productControler/paginationCategory"))
router.get("/:id", isValidId, require("../controlers/productControler/getSingleProduct"))
router.post('/addProduct', require('../controlers/productControler/addProduct'));

module.exports = router


