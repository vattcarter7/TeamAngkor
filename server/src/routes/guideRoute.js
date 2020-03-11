const express = require('express');
const { getGuides, getGuide, createGuide } = require('../controllers/guideController');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.route('/').get(getGuides);

router.route('/:id').get(getGuide).post(createGuide);

module.exports = router;
