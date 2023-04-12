/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

const express = require("express");
const router = express.Router();

// testing router
router.get("/", (req, res) => {
  res.send("This is tasting Router");
});

module.exports = router;
