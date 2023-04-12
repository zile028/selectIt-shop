const express = require("express")
const router = express.Router()
const contactMessage = require("../controlers/contact/contactMessage")

router.use("/user", require("./userRoutes"))

router.post("/contact", contactMessage)


module.exports = router