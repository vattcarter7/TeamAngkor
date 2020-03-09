const express = require('express');

const router = express.Router();

const { createUser, getTours } = require('../controllers/tourController');

const { protect } = require('../middlewares/auth');

router
  .route('/')
  .get(getTours)
  .post(createUser);

module.exports = router;
