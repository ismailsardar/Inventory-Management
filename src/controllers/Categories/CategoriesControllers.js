/**
 * Date: 15/04/2023
 * Subject: Inventory Project Controllers
 * Auth: Ismile Satdar
 */

//data base import
const CategoriesModel = require("../../models/Categories/CategoriesModel");

// common services import
const CreateService = require("../../services/common/createService");
const DropDownService = require("../../services/common/dropDownService");
const ListService = require("../../services/common/listService");
const UpdateService = require("../../services/common/updateService");

// CreateBrand
exports.CreateCategories = async (req, res) => {
  let result = await CreateService(req, CategoriesModel);
  res.status(201).json(result);
};

// UpdateBrand
exports.UpdateCategories = async (req, res) => {
  let result = await UpdateService(req, CategoriesModel);
  res.status(200).json(result);
};

// BrandList
exports.CategoriesList = async (req, res) => {
  let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRex }];
  let result = await ListService(req, CategoriesModel, SearchArray);
  res.status(200).json(result);
};

// BrandDropDown
exports.CategoriesDropDown = async (req, res) => {
  let result = await DropDownService(req, CategoriesModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};
