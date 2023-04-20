const express = require("express")
const router = express.Router()

router.use("/user", require("./userRoutes"));
router.use("/subscriber", require("./subscriberRoutes"));
router.use("/contact", require("./contactRoutes"))
router.use("/product", require("./productRoutes"))
router.use('/category', require('./categoryRoutes'))
module.exports = router;
