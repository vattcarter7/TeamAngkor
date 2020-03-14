const express = require('express');
const {
  getPurchases,
  createPurchase,
  deletePurchase,
  getPurchasesByGuide,
  refundPurchase
} = require('../controllers/purchaseController');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router
  .route('/')
  .get(getPurchases)
  .post(createPurchase);

router
  .route('/:id')
  .put(refundPurchase)
  .delete(deletePurchase);

router.route('/guides/:guideId').get(getPurchasesByGuide);

module.exports = router;
