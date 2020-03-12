const db = require('../db');
const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');

// @desc      Get all busy schedules
// @route     GET /api/v1/schedules
// @access    Private/Admin
exports.getBusySchedules = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM busy_schedules ORDER BY busy_date`;
  const { rows } = await db.query(textQuery);
  if (!rows[0]) return next(new ErrorResponse('No busy schedules found', 404));
  const busySchedule = rows;
  res.status(200).json({
    success: true,
    results: busySchedule.length,
    busySchedule
  });
});

// @desc      Create busy schedule
// @route     POST /api/v1/schedules
// @access    Private/Admin
exports.createBusyDate = asyncHandler(async (req, res, next) => {
  const createQuery = `INSERT INTO busy_schedules (guide_id, busy_date) VALUES($1, $2) returning *`;
  const values = [req.body.guideId, req.body.busyDate];

  const { rows } = await db.query(createQuery, values);
  if (!rows[0])
    return next(new ErrorResponse('Unable to create busy date', 400));

  const busySchedule = rows[0];

  res.status(201).json({
    success: true,
    busySchedule
  });
});

// @desc      Delete busy schedule
// @route     DELETE /api/v1/schedules
// @access    Private/Admin
exports.deleteBusyDate = asyncHandler(async (req, res, next) => {
  const deleteQuery = `DELETE FROM busy_schedules WHERE guide_id = $1 AND busy_date = $2 returning *`;
  const values = [req.body.guideId, req.body.busyDate];

  const { rows } = await db.query(deleteQuery, values);

  if (!rows[0]) return next(new ErrorResponse('Unable to delete busy date'));
  res.status(200).json({
    success: true,
    msg: 'busy schedule deleted'
  });
});

// @desc      Get all busy schedule by a single guide
// @route     GET /api/v1/schedules/guides/:id
// @access    Private/Admin
exports.getBusySchedulesByGuide = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM busy_schedules WHERE guide_id = $1 ORDER BY busy_date`;
  const value = [req.params.id];

  const { rows } = await db.query(textQuery, value);

  if (!rows[0])
    return next(new ErrorResponse('No busy schedules by that guide', 404));
  
  const busySchedules = rows;

  res.status(200).json({
    "success": true,
    "results": busySchedules.length,
    busySchedules
  })
});
