const db = require('../db');

const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');


// @desc      Get all tours
// @route     GET /api/v1/tours
// @access    Private/Admin
exports.getTours = asyncHandler(async(req, res, next) => {

})

// @desc      Create tour
// @route     POST /api/v1/tours
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {});
