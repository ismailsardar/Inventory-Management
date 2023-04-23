/**
 * Date: 12/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Satdar
 */

const UserDetailsService = async (request, dataModel) => {
  try {
    let data = await dataModel.aggregate([
      { $match: { UserEmail: request.headers["email"] } },
    ]);

    if (data) {
      return { status: "success", data: data };
    }
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = UserDetailsService;
