/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */
const jwt = require("jsonwebtoken");

const CreateToken = async (data) => {
  let Payload = {exp: Math.floor(Date.now() / 1000) + (24*60 * 60),data: data};

  return await jwt.sign(Payload, "jg45rt7p87ksd4oap5qv5of");
};

module.exports = CreateToken;
