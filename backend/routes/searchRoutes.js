const express = require("express")
const router = express.Router()

router.post("/:cat/:term", require("../controlers/searchControler/searchResults"))


module.exports = router