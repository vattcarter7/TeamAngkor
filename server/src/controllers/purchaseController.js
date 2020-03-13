const db = require('../db');
const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');

// @desc      Get all purchases
// @route     GET /api/v1/purchases
// @access    Private/Admin
exports.getPurchases = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM purchases ORDER BY tour_date`;
  const { rows } = await db.query(textQuery);
  if (!rows[0]) return next(new ErrorResponse('No purchases found', 404));
  const purchases = rows;
  res.status(200).json({
    success: true,
    results: purchases.length,
    purchases
  });
});

// @desc      Get a purchase by single guide
// @route     DELETE /api/v1/purchases/:guideId
// @access    Private/Admin
exports.getPurchasesByGuide = asyncHandler(async (req, res, next) => {});

// @desc      Create a purchase
// @route     POST /api/v1/purchases
// @access    Private/Admin
exports.createPurchase = asyncHandler(async (req, res, next) => {});

// @desc      Delete a purchase
// @route     DELETE /api/v1/purchases
// @access    Private/Admin
exports.deletePurchase = asyncHandler(async (req, res, next) => {});
