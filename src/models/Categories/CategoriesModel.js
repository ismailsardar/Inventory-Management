/**
 * Date: 15/04/2023
 * Subject: Inventory Project user model
 * Auth: Ismile Satdar
 */

const mongoose = require("mongoose");
const categoriesSchema = mongoose.Schema(
  {
    UserEmail: { type: String },
    Name: { type: String, unique: true },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const CategoriesModel = mongoose.model("categories", categoriesSchema);
module.exports = CategoriesModel;
