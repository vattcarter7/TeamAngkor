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
exports.getPurchasesByGuide = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT purchases.* ,guides.* FROM purchases
                     INNER JOIN guides 
                     ON purchases.guide_id = guides.id
                     WHERE guides.id = $1`;
  const value = [req.params.guideId];
  const { rows } = await db.query(textQuery, value);
  if (!rows[0])
    return next(new ErrorResponse('No purchases found for that guide', 404));

  const purchasesByGuide = rows;
  res.status(200).json({
    success: true,
    results: purchasesByGuide.length,
    purchasesByGuide
  });
});

// @desc      Create a purchase
// @route     POST /api/v1/purchases
// @access    Private/Admin
exports.createPurchase = asyncHandler(async (req, res, next) => {
  const createQuery = `INSERT INTO purchases (customer_id, tour_id, guide_id, tour_type, unit_price, pax, tour_date)
                          VALUES($1, $2, $3, $4, $5, $6, $7) returning *`;
  const values = [
    req.body.customerId,
    req.body.tourId,
    req.body.guideId,
    req.body.tourType,
    req.body.unitPrice,
    req.body.pax,
    req.body.tourDate
  ];

  const { rows } = await db.query(createQuery, values);

  if (!rows[0])
    return next(new ErrorResponse('Unable to make a purchase', 400));
  const purchase = rows[0];
  res.status(201).json({
    success: true,
    purchase
  });
});

// @desc      Delete a purchase
// @route     DELETE /api/v1/purchases
// @access    Private/Admin
exports.deletePurchase = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM purchases WHERE id = $1`;
  const param = [req.params.id];

  const response = await db.query(textQuery, param);
  if (!response.rows[0])
    return next(new ErrorResponse('No such purchase to delete', 404));

  const deleteQuery = `DELETE FROM purchases WHERE id = $1 returning *`;
  const value = [req.params.id];

  const { rows } = await db.query(deleteQuery, value);
  if (!rows[0]) return next(new ErrorResponse('Unable to delete', 400));
  res.status(200).json({
    success: true,
    msg: 'purchase deleted'
  });
});

// @desc      Refund a purchase
// @route     PUT /api/v1/purchases/:id
// @access    Private/Admin
exports.refundPurchase = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM purchases WHERE id = $1 AND refund = $2`;
  const params = [req.params.id, false];

  const response = await db.query(textQuery, params);
  if (!response.rows[0])
    return next(new ErrorResponse('No such purchase to refund', 404));

  const updateQuery = `UPDATE purchases SET refund = $1 WHERE id = $2 returning *`;
  const values = [true, req.params.id];

  const { rows } = await db.query(updateQuery, values);

  if (!rows[0]) return next(new ErrorResponse('Unable to make a refund', 400));

  const refundPurchase = rows[0];
  res.status(201).json({
    success: true,
    msg: 'refund successful',
    refundPurchase
  })
});