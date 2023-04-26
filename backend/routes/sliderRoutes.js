const express = require("express");

const router = express.Router();

router.get("/", require("../controlers/sliderController/getSlider"));
router.post("/", require("../controlers/sliderController/setSlider"));
module.exports = router;
