/**
 * Date: 16/04/2023
 * Subject: Inventory Project user model
 * Auth: Ismile Satdar
 */

const mongoose = require("mongoose");

const expenseTypeSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    Name: { type: String, unique: true },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ExpenseTypeModel = mongoose.model("expensetypes", expenseTypeSchema);

module.exports = ExpenseTypeModel;
