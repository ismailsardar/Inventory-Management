/**
 * Date: 15/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Sardar
 */

const UpdateService = async (req, dataModel) => {
  try {
    let UserEmail = req.headers["email"];
    let { id } = req.params;
    let postBody = req.body;

    let data = await dataModel.updateOne({ _id: id, UserEmail }, postBody);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = UpdateService;
