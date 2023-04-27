const express = require("express")
const router = express.Router()

router.post("/:term", require("../controlers/searchControler/searchResults"))


module.exports = router