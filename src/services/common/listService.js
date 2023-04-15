/**
 * Date: 15/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Sardar
 */

const ListService = async (req, dataModel, SearchArray) => {
  try {
    let pageNo = Number(Request.params.pageNo);
    let perPage = Number(Request.params.perPage);
    let searchValue = Request.params.searchKeyword;
    let UserEmail = Request.headers["email"];

    let skipRow = (pageNo - 1) * perPage;

    let data;

    if (searchValue !== "0") {
      let SearchQuery = { $or: SearchArray };
      data = await dataModel.aggregate([
        { $match: { UserEmail } },
        { $match: SearchQuery },
        {
          $facet: {
            Total: [{ $count: "count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await dataModel.aggregate([
        { $match: { UserEmail } },
        {
          $facet: {
            Total: [{ $count: "count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = ListService;
