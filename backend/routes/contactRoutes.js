const express = require("express")
const router = express.Router()

router.post("/", require("../controlers/ContactControler/contactMessage"))


module.exports = router