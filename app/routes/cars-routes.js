'use strict';

const express = require('express');
const router = express.Router();
const getCars = require('../controllers/cars/get-cars-controller');
const getCarsById = require('../controllers/cars/get-cars-by-id-controller');

router.route('/').get(getCars);
router.route('/:id').get(getCarsById);

module.exports = router;