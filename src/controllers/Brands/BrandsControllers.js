/**
 * Date: 15/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

//data base import
const BrandModel = require("../../models/Brand/BrandsModel");

// common services import
const CreateService = require("../../services/common/createService");
const DropDownService = require("../../services/common/dropDownService");
const ListService = require("../../services/common/listService");
const UpdateService = require("../../services/common/updateService");

// CreateBrand
exports.CreateBrand = async (req, res) => {
  let result = await CreateService(req, BrandModel);
  res.status(201).json(result);
};

// UpdateBrand
exports.UpdateBrand = async (req, res) => {
  let result = await UpdateService(req, BrandModel);
  res.status(200).json(result);
};

// BrandList
exports.BrandList = async (req, res) => {
  let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRex }];
  let result = await ListService(req, BrandModel, SearchArray);
  res.status(200).json(result);
};

// BrandDropDown
exports.BrandDropDown = async (req, res) => {
  let result = await DropDownService(req, BrandModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};
