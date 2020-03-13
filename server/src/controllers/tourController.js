const db = require('../db');
const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');
const { covertJavascriptToPosgresTimestamp } = require('../helpers/timeUtil');

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
  });
});

// @desc      Get single tour
// @route     GET /api/v1/tours/:id
// @access    Public
exports.getTour = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM tours WHERE id = $1`;
  const { rows } = await db.query(textQuery, [req.params.id]);
  if (!rows[0]) {
    return next(new ErrorResponse(`No tour found with id ${req.params.id}`));
  }
  const tour = rows[0];
  res.status(200).json({
    success: true,
    tour
  });
});

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
    !req.body.join_tour_unit_price ||
    !req.body.start_at ||
    !req.body.end_at
  ) {
    return next(new ErrorResponse('Some values are missing', 400));
  }
  const textQuery = `SELECT * FROM tours WHERE name = $1`;
  const value = [req.body.name.toLowerCase().trim()];

  const response = await db.query(textQuery, value);

  if (response.rows[0]) {
    return next(
      new ErrorResponse(`The tour named ${req.body.name} already exists`, 403)
    );
  }

  const createQuery = `INSERT INTO 
                       tours (name, description, images, videos, includes, not_includes, tokens, private_1pax_unit_price, private_2pax_unit_price, private_3pax_unit_price, private_4pax_unit_price, private_5pax_unit_price, private_6pax_unit_price, private_7pax_unit_price, private_8pax_unit_price, private_9pax_unit_price, private_10pax_unit_price, private_11pax_unit_price, private_12pax_unit_price, private_13pax_unit_price, private_14pax_unit_price, private_15pax_unit_price, private_16pax_unit_price, private_17pax_unit_price, private_18pax_unit_price, private_19pax_unit_price, join_tour_unit_price, start_at, end_at) 
                       VALUES ($1, $2, $3, $4, $5, $6, to_tsvector($7), $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
                       returning *`;

  const params = [
    req.body.name,
    req.body.description,
    req.body.images,
    req.body.videos,
    req.body.includes,
    req.body.not_includes,
    req.body.name + ' ' + req.body.description,
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
    req.body.join_tour_unit_price,
    req.body.start_at,
    req.body.end_at
  ];

  const { rows } = await db.query(createQuery, params);
  if (!rows[0]) {
    return next(
      new ErrorResponse(
        `Unable to create tour with name: ${req.body.name}`,
        400
      )
    );
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
exports.updateTour = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM tours WHERE id = $1`;
  const value = [req.params.id];
  const response = await db.query(textQuery, value);
  if (!response.rows[0]) {
    return next(new ErrorResponse('Unable to update tour', 400));
  }

  const tokens = req.body.name ? `to_tsvector($7)` : `$7`;

  const updateQuery = `UPDATE tours 
        SET 
          name = $1,
          description = $2,
          images = $3,
          videos = $4,
          includes = $5,
          not_includes = $6,
          tokens = ${tokens},
          modified_date = to_timestamp($8),
          active = $9,
          published = $10,
          join_tour_unit_price = $11,  
          private_1pax_unit_price = $12,
          private_2pax_unit_price = $13,
          private_3pax_unit_price = $14,
          private_4pax_unit_price = $15,
          private_5pax_unit_price = $16,
          private_6pax_unit_price = $17,
          private_7pax_unit_price = $18,
          private_8pax_unit_price = $19, 
          private_9pax_unit_price = $20,
          private_10pax_unit_price = $21,
          private_11pax_unit_price = $22,
          private_12pax_unit_price = $23,
          private_13pax_unit_price = $24,
          private_14pax_unit_price = $25,
          private_15pax_unit_price = $26,
          private_16pax_unit_price = $27,
          private_17pax_unit_price = $28,
          private_18pax_unit_price = $29,
          private_19pax_unit_price = $30,
          start_at = $31,
          end_at = $32
        WHERE id = $33
        returning *
      `;

  const updateValues = [
    req.body.name ? req.body.name : response.rows[0].name,
    req.body.description || response.rows[0].description,
    req.body.images || response.rows[0].images,
    req.body.videos || response.rows[0].videos,
    req.body.includes || response.rows[0].includes,
    req.body.not_includes || response.rows[0].not_includes,
    req.body.name || response.rows[0].tokens,
    covertJavascriptToPosgresTimestamp(Date.now()),
    req.body.active || response.rows[0].active,
    req.body.published || response.rows[0].published,
    req.body.join_tour_unit_price || response.rows[0].join_tour_unit_price,
    req.body.private_1pax_unit_price ||
      response.rows[0].private_1pax_unit_price,
    req.body.private_2pax_unit_price ||
      response.rows[0].private_2pax_unit_price,
    req.body.private_3pax_unit_price ||
      response.rows[0].private_3pax_unit_price,
    req.body.private_4pax_unit_price ||
      response.rows[0].private_4pax_unit_price,
    req.body.private_5pax_unit_price ||
      response.rows[0].private_5pax_unit_price,
    req.body.private_6pax_unit_price ||
      response.rows[0].private_6pax_unit_price,
    req.body.private_7pax_unit_price ||
      response.rows[0].private_7pax_unit_price,
    req.body.private_8pax_unit_price ||
      response.rows[0].private_8pax_unit_price,
    req.body.private_9pax_unit_price ||
      response.rows[0].private_9pax_unit_price,
    req.body.private_10pax_unit_price ||
      response.rows[0].private_10pax_unit_price,
    req.body.private_11pax_unit_price ||
      response.rows[0].private_11pax_unit_price,
    req.body.private_12pax_unit_price ||
      response.rows[0].private_12pax_unit_price,
    req.body.private_13pax_unit_price ||
      response.rows[0].private_13pax_unit_price,
    req.body.private_14pax_unit_price ||
      response.rows[0].private_14pax_unit_price,
    req.body.private_15pax_unit_price ||
      response.rows[0].private_15pax_unit_price,
    req.body.private_16pax_unit_price ||
      response.rows[0].private_16pax_unit_price,
    req.body.private_17pax_unit_price ||
      response.rows[0].private_17pax_unit_price,
    req.body.private_18pax_unit_price ||
      response.rows[0].private_18pax_unit_price,
    req.body.private_19pax_unit_price ||
      response.rows[0].private_19pax_unit_price,
    req.body.start_at || response.rows[0].start_at,
    req.body.end_at || response.rows[0].end_at,
    req.params.id
  ];

  const { rows } = await db.query(updateQuery, updateValues);

  if (!rows[0]) return next(new ErrorResponse('Unable to update tour', 400));

  const updatedTour = rows[0];

  res.status(201).json({
    success: true,
    updatedTour
  });
});

// @desc      Delete tour
// @route     POST /api/v1/tours/:id
// @access    Private/Admin
exports.deleteTour = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM tours WHERE id = $1`;
  const value = [req.params.id];
  const response = await db.query(textQuery, value);
  if (!response.rows[0])
    return next(new ErrorResponse('No such tour to delete', 404));
  const deleteQuery = `DELETE FROM tours WHERE id = $1`;
  const deleteParam = [req.params.id];

  await db.query(deleteQuery, deleteParam);
  res.status(200).json({
    success: true,
    msg: 'Tour deleted'
  });
});
