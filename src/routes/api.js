/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

const express = require("express");
const router = express.Router();

//Auth Verify Middleware
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
// Users Controller modules
const UsersController = require('../controllers/Users/UsersController');

// testing router
router.get("/", (req, res) => {
  res.send("This is tasting Router");
});

// users Router
router.post("/registration",UsersController.Registration);
router.post("/login",UsersController.Login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/recoverEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/verifyOtp/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/resetPassword",UsersController.resetPassword );

module.exports = router;
