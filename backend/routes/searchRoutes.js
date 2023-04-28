const express = require("express")
const router = express.Router()

router.post("/", require("../controlers/searchControler/searchResults"))


module.exports = router