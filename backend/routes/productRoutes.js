const express = require("express")
const router = express.Router()

router.get("/:limit/:page", require("../controlers/productControler/pagination"))

module.exports = router