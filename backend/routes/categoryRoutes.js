const express = require("express")
const router = express.Router()

router.get("/all", require("../controlers/CategoryControler/categories"))


module.exports = router