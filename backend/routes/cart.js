const express = require('express');
const {decodedToken} = require("../middelware/authToken");
const router = express.Router();

router.post('/paymentInit', require('../controlers/CartControler/paymentInit'));
router.post("/orders/add", require('../controlers/CartControler/addOrder'))
router.get("/orders/all/:email", decodedToken, require('../controlers/CartControler/allOrder'))


module.exports = router;