const express = require('express');
const {
  getBusySchedules,
  createBusyDate,
  deleteBusyDate,
  getBusySchedulesByGuide
} = require('../controllers/scheduleController');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router
  .route('/')
  .get(getBusySchedules)
  .post(createBusyDate)
  .delete(deleteBusyDate);

router.route('/guides/:id').get(getBusySchedulesByGuide);

module.exports = router;
