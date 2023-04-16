/**
 * Date: 15/04/2023
 * Subject: Inventory Project
 * Auth: Ismile Satdar
 */

//data base import
const ProductModel = require("../../models/Products/ProductModule");

// common services import
const CreateService = require("../../services/common/createService");
const ListOneJoinService = require("../../services/common/listOneJoinService");
const UpdateService = require("../../services/common/updateService");

// CreateExpense
exports.CreateProduct = async (req, res) => {
  let result = await CreateService(req, ProductModel);
  res.status(201).json(result);
};

// UpdateExpense
exports.UpdateProduct = async (req, res) => {
  let result = await UpdateService(req, ProductModel);
  res.status(200).json(result);
};

// BrandList
exports.ProductList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [
    { Amount: SearchRgx },
    { Note: SearchRgx },
    { "Type.Name": SearchRgx },
  ];
  let JoinStage = {$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}}
  let result = await ListOneJoinService(req, ExpenseModel, SearchArray,JoinStage);
  res.status(200).json(result);
};
