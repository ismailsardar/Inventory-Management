/**
 * Date: 12/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Sardar
*/

const UserCreateService = async (req, dataModel) => {
  try {
    let postBody = req.body;
    let data = await dataModel.create(postBody);

    if (data) {
      return { status: "success", data: data };
    }
  } catch (error) {
    return { status: "fail", error: error };
  }
};

module.exports = UserCreateService;
