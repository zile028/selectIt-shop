const express = require("express");
const SubscribeModel = require("../model/subscirbeModel");
const router = express.Router();

router.post(
  "/subscriber",
  require("../controlers/subsControler/addSubscribers")
);

module.exports = router;
