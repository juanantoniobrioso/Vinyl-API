const express = require('express');
const router = express.Router();
const viniloController = require('../controllers/viniloController');

router.get('/vinilos', viniloController.getVinilos);

module.exports = router;