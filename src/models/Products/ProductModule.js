/**
 * Date: 16/04/2023
 * Subject: Inventory Project product model
 * Auth: Ismile Satdar
 */

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    CategoryID: { type: ObjectId },
    BrandID: { type: ObjectId },
    Name: { type: String },
    Unit: { type: String },
    Details: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
