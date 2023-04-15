/**
 * Date: 15/04/2023
 * Subject: Inventory Project Controllers
 * Auth: Ismile Satdar
 */

//data base import
const CustomersModel = require("../../models/Customers/CustomersModel");

// common services import
const CreateService = require("../../services/common/createService");
const DropDownService = require("../../services/common/dropDownService");
const ListService = require("../../services/common/listService");
const UpdateService = require("../../services/common/updateService");

// CreateBrand
exports.CreateCustomers = async (req, res) => {
  let result = await CreateService(req, CustomersModel);
  res.status(201).json(result);
};

// UpdateBrand
exports.UpdateCustomers = async (req, res) => {
  let result = await UpdateService(req, CustomersModel);
  res.status(200).json(result);
};

// BrandList
exports.CustomersList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray=[{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
  let result = await ListService(req, CustomersModel, SearchArray);
  res.status(200).json(result);
};

// BrandDropDown
exports.CustomersDropDown = async (req, res) => {
  let result = await DropDownService(req, CustomersModel, { _id: 1,CustomerName: 1 });
  res.status(200).json(result);
};
