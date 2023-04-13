/**
 * Date: 12/04/2023
 * Subject: Inventory Project user model
 * Auth: Ismile Satdar
*/

let mongoose = require("mongoose");
let userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    password: { type: String },
    photo: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

let UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
