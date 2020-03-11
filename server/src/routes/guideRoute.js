const express = require('express');
const {
  getGuides,
  getGuide,
  createGuide,
  updateGuide,
  deleteGuide
} = require('../controllers/guideController');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.route('/').get(getGuides);

router
  .route('/:id')
  .get(getGuide)
  .post(createGuide)
  .put(updateGuide)
  .delete(deleteGuide);

module.exports = router;
