const db = require('../db');
const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');

// @desc      Get all reviews
// @route     GET /api/v1/reviews
// @access    Private/Admin
exports.getAllReviews = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM reviews`;
  const { rows } = await db.query(textQuery);
  if (!rows[0]) return next(new ErrorResponse('No reviews found', 404));
  const reviews = rows;
  res.status(200).json({
    success: true,
    results: reviews.length,
    reviews
  });
});

// @desc      Get all published reviews
// @route     GET /api/v1/reviews/published
// @access    Private/Admin
exports.getPublishedReviews = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM reviews WHERE published = $1`;
  const value = [true];
  const { rows } = await db.query(textQuery, value);
  if (!rows[0])
    return next(new ErrorResponse('No published reviews found', 404));

  const publishedReviews = rows;

  res.status(200).json({
    success: true,
    results: publishedReviews.length,
    publishedReviews
  });
});

// @desc      Get all unpublished reviews
// @route     GET /api/v1/reviews/unpublished
// @access    Private/Admin
exports.getUnpublishedReviews = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM reviews WHERE published = $1`;
  const value = [false];
  const { rows } = await db.query(textQuery, value);
  if (!rows[0])
    return next(new ErrorResponse('No unpublished reviews found', 404));

  const unpublishedReviews = rows;

  res.status(200).json({
    success: true,
    results: unpublishedReviews.length,
    unpublishedReviews
  });
});

// @desc      Get single review
// @route     GET /api/v1/reviews/:id
// @access    Private/Admin
exports.getReview = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM reviews WHERE id = $1`;
  const value = [req.params.id];
  const { rows } = await db.query(textQuery, value);
  if (!rows[0])
    return next(new ErrorResponse(`No such review with ID: ${req.params.id}`));

  const review = rows[0];

  res.status(200).json({
    success: true,
    review
  });
});

// @desc      Create a review
// @route     POST /api/v1/reviews
// @access    Private/customer/admin
exports.createReview = asyncHandler(async (req, res, next) => {
  const insertQuery = `INSERT INTO reviews (customer_id, tour_id, guide_id, rating, title, comment, tokens)
                      VALUES($1, $2, $3, $4, $5, $6, to_tsvector($7)) returning *`;
  const inserValues = [
    req.user.id,
    req.body.tourId,
    req.body.guideId,
    req.body.rating,
    req.body.title,
    req.body.comment,
    req.body.title + ' ' + req.body.comment
  ];

  const { rows } = await db.query(insertQuery, inserValues);
  if (!rows[0]) return next(new ErrorResponse('Unable to create review', 400));
  const review = rows[0];
  res.status(200).json({
    success: true,
    review
  });
});

// @desc      publish a review
// @route     PUT /api/v1/reviews/:id
// @access    Private/customer/admin
exports.publishReview = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM reviews WHERE id = $1 AND published = $2`;
  const values = [req.params.id, false];
  const response = await db.query(textQuery, values);
  if (!response.rows[0])
    return next(
      new ErrorResponse('No review found. Unable to publish review', 404)
    );

  try {
    // 1. update reviews table publish field to true
    await db.query('BEGIN');
    const updateQuery = `UPDATE reviews SET published = $1 WHERE id = $2`;
    const updateValues = [true, response.rows[0].id];
    await db.query(updateQuery, updateValues);

    // 2. update guides table, rating field
    const updateGuideQuery = `UPDATE guides 
                              SET 
                                rating_total = rating_total + $1,
                                rating_count = rating_count + 1,
                                rating = (rating_total::decimal + $2) / (rating_count::decimal  + 1)
                              WHERE id = $3 returning *`;
    const updateGuideValues = [
      response.rows[0].rating,
      response.rows[0].rating,
      response.rows[0].guide_id
    ];

    const { rows } = await db.query(updateGuideQuery, updateGuideValues);
    if (!rows[0])
      return next(new ErrorResponse('Unable to update guide rating', 400));

    const guide = rows[0];
    const review = response.rows[0];
    await db.query('COMMIT');
    res.status(201).json({
      success: true,
      review,
      guide
    });
  } catch (err) {
    await db.query('ROLLBACK');
    res.status(400).json({
      success: false,
      errMsg: 'Unable to publish the review'
    });
  }
});
