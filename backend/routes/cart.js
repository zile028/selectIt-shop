const express = require('express');
const router = express.Router();

router.post('/paymentInit', require('../controlers/CartControler/paymentInit'));

module.exports = router;