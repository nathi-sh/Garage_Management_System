const express=  require('express');
const customerController = require('../controllers/custumer.controller');
const authMiddleware = require('../middlewares/auth.midleware');

const router = express.Router();

router.get("/api/customer/search",[authMiddleware.verifToken,authMiddleware.isAdmin],customerController.searchCustomers);
router.post('/api/customer',[authMiddleware.verifToken,authMiddleware.isAdmin], customerController.createCustomer);
router.get('/api/customer/:id',[authMiddleware.verifToken,authMiddleware.isAdmin], customerController.getCustomer);
router.get("/api/customer",[authMiddleware.verifToken,authMiddleware.isAdmin],customerController.getCustomers);
router.put("/api/customer/:id",[authMiddleware.verifToken,authMiddleware.isAdmin],customerController.updateCustomer);


module.exports = router;