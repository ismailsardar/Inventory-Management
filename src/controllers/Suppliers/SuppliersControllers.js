/**
 * Date: 15/04/2023
 * Subject: Inventory Project Controllers
 * Auth: Ismile Satdar
 */

//data base import
const SuppliersModel = require("../../models/Suppliers/SuppliersModel");

// common services import
const CreateService = require("../../services/common/createService");
const DropDownService = require("../../services/common/dropDownService");
const ListService = require("../../services/common/listService");
const UpdateService = require("../../services/common/updateService");

// CreateBrand
exports.CreateSuppliers = async (req, res) => {
  let result = await CreateService(req, SuppliersModel);
  res.status(201).json(result);
};

// UpdateBrand
exports.UpdateSuppliers = async (req, res) => {
  let result = await UpdateService(req, SuppliersModel);
  res.status(200).json(result);
};

// BrandList
exports.SuppliersList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray=[{Name: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
  let result = await ListService(req, SuppliersModel, SearchArray);
  res.status(200).json(result);
};

// BrandDropDown
exports.SuppliersDropDown = async (req, res) => {
  let result = await DropDownService(req, SuppliersModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};
