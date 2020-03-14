const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
  publishReview,
  getPublishedReviews,
  getUnpublishedReviews
} = require('../controllers/reviewController');

const router = express.Router();

const { protect, authorize } = require('../middlewares/auth');

router
  .route('/')
  .get(getAllReviews)
  .post(protect, authorize('user'), createReview);

router.route('/published').get(getPublishedReviews);
router.route('/unpublished').get(getUnpublishedReviews);

router
  .route('/:id')
  .get(getReview)
  .put(publishReview);

module.exports = router;
