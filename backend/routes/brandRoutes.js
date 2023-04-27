const express = require('express');
const router = express.Router();

router.get('/all', require('../controlers/BrandControler/brand'));

module.exports = router;

