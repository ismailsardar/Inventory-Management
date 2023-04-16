/**
 * Date: 15/04/2023
 * Subject: Inventory Project
 * Auth: Ismile Satdar
 */

//data base import
const ExpenseModel = require("../../models/Expense/ExpensesModel");

// common services import
const CreateService = require("../../services/common/createService");
const UpdateService = require("../../services/common/updateService");

// CreateBrand
exports.CreateExpense = async (req, res) => {
  let result = await CreateService(req, ExpenseModel);
  res.status(201).json(result);
};

// UpdateBrand
exports.UpdateExpense = async (req, res) => {
  let result = await UpdateService(req, ExpenseModel);
  res.status(200).json(result);
};

