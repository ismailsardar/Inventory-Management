/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

// Data Base module
const OtpModel = require("../../models/Users/OTPSModel");
const UserModel = require("../../models/Users/UsersModel");

// Service module
const {UserCreateService} = require("../../services/user/UserCreateService.js");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserResetPassService = require("../../services/user/UserResetPassService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService");
const UserVerifyOtpService = require("../../services/user/UserVerifyOtpService");

// Users Registration
exports.Registration = async (req, res) => {
  let result = await UserCreateService(req, UserModel);
  // user Response
  res.status(201).json(result);
};

// Users Recover ResetPass
exports.Login = async (req, res) => {
  let result = await UserLoginService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

// Users Profile Update
exports.ProfileUpdate = async (req, res) => {
  let result = await UserUpdateService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

// Users Profile Details
exports.ProfileDetails = async (req, res) => {
  let result = await UserDetailsService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

// Users Recover Verify Email
exports.RecoverVerifyEmail = async (req, res) => {
  let result = await UserVerifyEmailService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

// Users Recover Verify OTP
exports.RecoverVerifyOTP = async (req, res) => {
  let result = await UserVerifyOtpService(req, OtpModel);
  // user Response
  res.status(200).json(result);
};

// Users User Reset Password
exports.resetPassword = async (req, res) => {
  let result = await UserResetPassService(req, UserModel);
  // user Response
  res.status(201).json(result);
};
