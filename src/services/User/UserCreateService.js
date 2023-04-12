/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

const UserCreateService = async (request, dataModel) => {
  try {
    let postBody = request.body;
    let data = await dataModel.create(postBody);
    if (data) {
      return { status: "success", data: data };
    }
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = UserCreateService;
