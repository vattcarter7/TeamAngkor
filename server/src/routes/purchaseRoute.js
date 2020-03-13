const express = require('express');
const {
  getPurchases,
  createPurchase,
  deletePurchase,
  getPurchasesByGuide
} = require('../controllers/purchaseController');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router
  .route('/')
  .get(getPurchases)
  .post(createPurchase)
  .delete(deletePurchase);

router.route('/guides/:id').get(getPurchasesByGuide);

module.exports = router;
