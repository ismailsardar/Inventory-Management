/**
 * Date: 15/04/2023
 * Subject: Inventory Project user model
 * Auth: Ismile Satdar
 */

let mongoose = require("mongoose");
let brandSchema = new mongoose.Schema(
  {
    UserEmail:{type:String},
    Name:{type:String,unique:true},
    CreatedDate:{type:Date,default:Date.now()}
  },
  { versionKey: false }
);

let BrandModel = mongoose.model("brands", brandSchema);
module.exports = BrandModel;