const express = require("express");
const orderControllers = require("../controllers/orderController");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, orderControllers.newOrder);
router
  .route("/order/:id")
  .get(isAuthenticatedUser, orderControllers.getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, orderControllers.myOrders);
router
  .route("/admin/orders")
  .get(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    orderControllers.getAllOrders
  );
router
  .route("/admin/order/:id")
  .put(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    orderControllers.updateOrder
  )
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    orderControllers.deleteOrder
  );
module.exports = router;
