/**
 * Date: 15/04/2023
 * Subject: Inventory Project
 * Auth: Ismile Satdar
 */

//data base import
const ProductModel = require("../../models/Products/ProductModule");

// common services import
const CreateService = require("../../services/common/createService");
const ListTwoJoinService = require("../../services/common/listTwoJoinService");
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
    {Name: SearchRgx},
    {Unit: SearchRgx},
    {Details: SearchRgx},
    {'brands.Name':SearchRgx},
    {'categories.Name':SearchRgx}
];
  let JoinStage1 = {$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}}

  let JoinStage2 = {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}}

  let result = await ListTwoJoinService(req, ProductModel, SearchArray,JoinStage1,JoinStage2);
  
  res.status(200).json(result);
};
