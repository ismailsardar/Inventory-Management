/**
 * Date: 13/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Sardar
 */

const UserVerifyEmailService = async (request, dataModel) => {
  try {
    //Email query
    let email = request.params.email;
    let otpCode = Math.floor(100000 + Math.random() * 900000);

    let data = await dataModel.updateOne(
      { email: request.headers["email"] },
      request.body
    );

    if (data) {
      return { status: "success", data: data };
    }
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = UserVerifyEmailService;
