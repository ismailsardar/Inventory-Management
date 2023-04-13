/**
 * Date: 13/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Sardar
 */

const OtpModel = require("../../models/Users/OTPSModel");
const SendEmail = require("../../utility/SendEmail");

const UserVerifyEmailService = async (request, dataModel) => {
  try {
    //Email query
    let email = request.params.email;
    let otpCode = Math.floor(100000 + Math.random() * 900000);

    let userCount = await dataModel.aggregate([
      { $match: { email } },
      { $count: "total" },
    ]);

    if (userCount.length > 0) {
      //otp create
      await OtpModel.create({ email, otp: otpCode });

      //send email
      let sendEmail = await SendEmail(
        email,
        `Your PIN Code is => ${otpCode}`,
        "Inventory PIN Verification"
      );

      return { status: "success", data: sendEmail };
    } else {
      return { status: "fail", data: "User not found!" };
    }
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = UserVerifyEmailService;
