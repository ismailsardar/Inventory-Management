/**
 * Date: 15/04/2023
 * Subject: Inventory Project
 * Auth: Ismile Satdar
 */

//data base import
const ExpenseTypesModel = require("../../models/Expense/ExpenseTypesModel");

// common services import
const CreateService = require("../../services/common/createService");
const DropDownService = require("../../services/common/dropDownService");
const ListService = require("../../services/common/listService");
const UpdateService = require("../../services/common/updateService");

// CreateBrand
exports.CreateExpenseTypes = async (req, res) => {
  let result = await CreateService(req, ExpenseTypesModel);
  res.status(201).json(result);
};

// UpdateBrand
exports.UpdateExpenseTypes = async (req, res) => {
  let result = await UpdateService(req, ExpenseTypesModel);
  res.status(200).json(result);
};

// BrandList
exports.ExpenseTypesList = async (req, res) => {
  let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRex }];
  let result = await ListService(req, ExpenseTypesModel, SearchArray);
  res.status(200).json(result);
};

// BrandDropDown
exports.ExpenseTypesDropDown = async (req, res) => {
  let result = await DropDownService(req, ExpenseTypesModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};
