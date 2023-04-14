const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoutes"));
router.use("/subscriber", require("./subscriberRoutes"));

module.exports = router;
