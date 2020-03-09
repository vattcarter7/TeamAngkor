const db = require('../db');

const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');

// @desc      Get all tours
// @route     GET /api/v1/tours
// @access    Private/Admin
exports.getTours = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM tours`;
  const { rows } = await db.query(textQuery);
  if (!rows[0]) {
    return next(new ErrorResponse('Tours not found', 404));
  }
  const tours = rows;
  res.status(200).json({
    success: true,
    results: tours.length,
    tours
  })
});

// @desc      Get single tour
// @route     GET /api/v1/tours/:id
// @access    Public
exports.getTour = asyncHandler(async(req, res, next) => {
  const textQuery = `SELECT * FROM tours WHERE id = $1`;
  const {rows} = await db.query(textQuery, [req.params.id])
  if (!rows[0]) {
    return next(new ErrorResponse(`No tour found with id ${req.params.id}`));
  }
  const tour = rows[0];
  res.status(200).json({
    success: true,
    tour
  })
})

// @desc      Create tour
// @route     POST /api/v1/tours
// @access    Private/Admin
exports.createTour = asyncHandler(async (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.images ||
    !req.body.includes ||
    !req.body.private_1pax_unit_price ||
    !req.body.private_2pax_unit_price ||
    !req.body.private_3pax_unit_price ||
    !req.body.private_4pax_unit_price ||
    !req.body.private_5pax_unit_price ||
    !req.body.private_6pax_unit_price ||
    !req.body.private_7pax_unit_price ||
    !req.body.private_8pax_unit_price ||
    !req.body.private_9pax_unit_price ||
    !req.body.private_10pax_unit_price ||
    !req.body.private_11pax_unit_price ||
    !req.body.private_12pax_unit_price ||
    !req.body.private_13pax_unit_price ||
    !req.body.private_14pax_unit_price ||
    !req.body.private_15pax_unit_price ||
    !req.body.private_16pax_unit_price ||
    !req.body.private_17pax_unit_price ||
    !req.body.private_18pax_unit_price ||
    !req.body.private_19pax_unit_price ||
    !req.body.join_tour_unit_price
  ) {
    return next(new ErrorResponse('Some values are missing', 400));
  }
  const createQuery = `INSERT INTO 
                       tours (name, description, images, videos, includes, not_includes, tokens, private_1pax_unit_price, private_2pax_unit_price, private_3pax_unit_price, private_4pax_unit_price, private_5pax_unit_price, private_6pax_unit_price, private_7pax_unit_price, private_8pax_unit_price, private_9pax_unit_price, private_10pax_unit_price, private_11pax_unit_price, private_12pax_unit_price, private_13pax_unit_price, private_14pax_unit_price, private_15pax_unit_price, private_16pax_unit_price, private_17pax_unit_price, private_18pax_unit_price, private_19pax_unit_price, join_tour_unit_price) 
                       VALUES ($1, $2, $3, $4, $5, $6, to_tsvector($7), $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27) returning *`;

  const params = [
    req.body.name,
    req.body.description,
    req.body.images,
    req.body.videos,
    req.body.includes,
    req.body.not_includes,
    req.body.name,
    req.body.private_1pax_unit_price,
    req.body.private_2pax_unit_price,
    req.body.private_3pax_unit_price,
    req.body.private_4pax_unit_price,
    req.body.private_5pax_unit_price,
    req.body.private_6pax_unit_price,
    req.body.private_7pax_unit_price,
    req.body.private_8pax_unit_price,
    req.body.private_9pax_unit_price,
    req.body.private_10pax_unit_price,
    req.body.private_11pax_unit_price,
    req.body.private_12pax_unit_price,
    req.body.private_13pax_unit_price,
    req.body.private_14pax_unit_price,
    req.body.private_15pax_unit_price,
    req.body.private_16pax_unit_price,
    req.body.private_17pax_unit_price,
    req.body.private_18pax_unit_price,
    req.body.private_19pax_unit_price,
    req.body.join_tour_unit_price
  ];

  const { rows } = await db.query(createQuery, params);
  if (!rows[0]) {
    return next(new ErrorResponse('Unable to create tour', 400));
  }
  const tour = rows[0];
  res.status(201).json({
    success: true,
    tour
  });
});

// @desc      Update tour
// @route     POST /api/v1/tours/:id
// @access    Private/Admin
exports.updateTour = asyncHandler(async(req, res, next) => {

})

// @desc      Delete tour
// @route     POST /api/v1/tours/:id
// @access    Private/Admin
exports.deleteTour = asyncHandler(async(req, res, next) => {
  
})