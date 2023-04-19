/**
 * Date: 18/04/2023
 * Subject: Inventory Project Expense Report Service
 * Auth: Ismile Satdar
 */

const ExpenseModel = require("../../models/Expense/ExpensesModel");

const ExpenseReportService = async (req) => {
  try {
    let UserEmail = req.headers["email"];
    let { FormDate, ToDate } = req.body;

    const data = await ExpenseModel.aggregate([
      {
        $match: {
          UserEmail: UserEmail,
          CreatedDate: { $gte: new Date(FormDate), $lte: new Date(ToDate) },
        },
      },
      {
        $facet: {
          Total: [{ $group: { _id: 0, TotalAmount: { $sum: "$Amount" } } }],
          Rows: [
            {
              $lookup: {
                from: "expensetypes",
                localField: "TypeID",
                foreignField: "_id",
                as: "Type",
              },
            },
          ],
        },
      },
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = ExpenseReportService;
