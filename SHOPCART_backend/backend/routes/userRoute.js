const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const userController = require("../controllers/userController");
router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.loginUser);
router.route("/password/forgot").post(userController.forgotPassword);
router.route("/password/reset/:token").put(userController.resetPassword);
router.route("/logout").get(userController.logout);
router.route("/me").get(isAuthenticatedUser, userController.getUserDetails);
router
  .route("/password/update")
  .put(isAuthenticatedUser, userController.updateUserPassword);
router
  .route("/me/update")
  .put(isAuthenticatedUser, userController.updateUserProfile);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), userController.getAllUser);
router
  .route("/admin/user/:id")
  .get(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    userController.getSingleUser
  )
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    userController.deleteUser
  )
  .put(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    userController.updateUserRole
  );
module.exports = router;
