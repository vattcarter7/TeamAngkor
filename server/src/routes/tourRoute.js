const express = require('express');

const router = express.Router();

const {
  getTour,
  createTour,
  getTours,
  updateTour,
  deleteTour
} = require('../controllers/tourController');

const { protect } = require('../middlewares/auth');

router
  .route('/')
  .get(getTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .put(updateTour)
  .delete(deleteTour);

module.exports = router;
