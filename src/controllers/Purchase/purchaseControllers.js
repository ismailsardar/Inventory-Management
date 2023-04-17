/**
 * Date: 17/04/2023
 * Subject: Inventory Project purchase controller
 * Auth: Ismile Satdar
 */

//data base import
const ParentModel = require("../../models/Purchases/PurchasesModel");
const ChildeModel = require("../../models/Purchases/PurchaseProductsModel");
const ParentChildeService = require("../../services/common/createParentChildsService");

// CreatePurchases
exports.CreatePurchases = async (req, res) => {
  let Result = await ParentChildeService(
    req,
    ParentModel,
    ChildeModel,
    "PurchaseID"
  );
  res.status(200).json(Result);
};
