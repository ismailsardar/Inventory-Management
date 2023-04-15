/**
 * Date: 15/04/2023
 * Subject: Inventory Project user model
 * Auth: Ismile Satdar
*/

const mongoose = require("mongoose");
const suppliersSchema = mongoose.Schema(
  { 
    UserEmail: { type: String },
    Name: { type: String },
    Address: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const SuppliersModel = mongoose.model("suppliers", suppliersSchema);
module.exports = SuppliersModel;
