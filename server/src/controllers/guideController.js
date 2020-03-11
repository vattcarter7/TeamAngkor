const db = require('../db');
const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');
const { covertJavascriptToPosgresTimestamp } = require('../helpers/timeUtil');

// @desc      Get all guides
// @route     GET /api/v1/guides
// @access    Private/Admin
exports.getGuides = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM guides`;
  const { rows } = await db.query(textQuery);
  if (!rows[0]) return next(new ErrorResponse('No guides found', 404));
  const guides = rows;
  res.status(200).json({
    success: true,
    results: guides.length,
    guides
  });
});

// @desc      Get all guides
// @route     GET /api/v1/guides/:id
// @access    public
exports.getGuide = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM guides WHERE id = $1`;
  const value = [req.params.id];
  const { rows } = await db.query(textQuery, value);
  if (!rows[0]) return next(new ErrorResponse('Guide not found', 404));
  const guide = rows[0];
  res.status(200).json({
    success: true,
    guide
  });
});

// @desc      Greate guide from users' table
// @route     POST /api/v1/guides/:id
// @access    Private/Admin
exports.createGuide = asyncHandler(async (req, res, next) => {
  const createQuery = `SELECT * FROM users WHERE id = $1`;
  const value = [req.params.id];
  const response = await db.query(createQuery, value);
  if (!response.rows[0])
    return next(
      new ErrorResponse('No user found. Unable to create guide', 404)
    );

  // create guide - make transaction
  try {
    await db.query('BEGIN');

    // update users table to change user-role to 'guide'
    const updateQuery = `UPDATE users SET user_role = $1 WHERE id = $2`;
    const value = ['guide', response.rows[0].id];
    await db.query(updateQuery, value);

    // insert into guide table record
    const insertQuery = `INSERT INTO guides 
                         (id, 
                          nickname, 
                          language_id, 
                          profile_picture, 
                          about_me, 
                          phone, 
                          email) VALUES($1, $2, $3, $4, $5, $6, $7) returning *`;

    const insertValues = [
      response.rows[0].id,
      req.body.nickname,
      req.body.language_id,
      req.body.profile_picture,
      req.body.about_me,
      req.body.phone,
      req.body.email
    ];

    const { rows } = await db.query(insertQuery, insertValues);
    const guide = rows[0];
    await db.query('COMMIT');
    res.status(201).json({
      success: true,
      guide
    });
  } catch (err) {
    await db.query('ROLLBACK');
    res.status(400).json({
      success: false,
      errMsg: 'Unable to create guide'
    });
  }
});

exports.updateGuide = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM guides WHERE id = $1`;
  const value = [req.params.id];
  const response = await db.query(textQuery, value);
  if (!response.rows[0])
    return next(new ErrorResponse('No such guide to update', 404));

  const updateQuery = `UPDATE guides SET
                          nickname                =$1, 
                          language_id             =$2,
                          profile_picture         =$3,
                          about_me                =$4, 
                          phone                   =$5,
                          email                   =$6,
                          modified_date           =to_timestamp($7)
                        WHERE id = $8 returning *
                      `;
  const updateValues = [
    req.body.nickname || response.rows[0].nickname,
    req.body.language_id || response.rows[0].language_id,
    req.body.profile_picture || response.rows[0].profile_picture,
    req.body.about_me || response.rows[0].about_me,
    req.body.phone || response.rows[0].phone,
    req.body.email || response.rows[0].email,
    covertJavascriptToPosgresTimestamp(Date.now()),
    req.params.id
  ];

  const { rows } = await db.query(updateQuery, updateValues);
  if (!rows[0]) {
    return next(new ErrorResponse('Unable to update guide', 400));
  }
  const guide = rows[0];
  res.status(200).json({
    success: true,
    msg: 'guide updated successfully!',
    guide
  });
});

exports.deleteGuide = asyncHandler(async (req, res, next) => {
  const textQuery = `SELECT * FROM guides WHERE id = $1`;
  const value = [req.params.id];
  const response = await db.query(textQuery, value);
  if (!response.rows[0])
    return next(new ErrorResponse('No such guide to delete', 404));

  // delete guide with the ID
  const deleteQuery = `DELETE FROM guides WHERE id = $1`;
  const deleteParam = [response.rows[0].id];

  await db.query(deleteQuery, deleteParam);
  res.status(200).json({
    success: true,
    msg: 'guide deleted'
  })
});
