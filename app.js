/**
 * Date: 12/04/2023
 * Subject: Inventory Project All package require
 * Auth: Ismile Satdar
 */

// Basic Lib Import
const express = require("express");
const app = new express();
const router = require("./src/routes/api");

// Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const morgan = require("morgan");
const nocache = require("nocache");
const bodyParser = require("body-parser");
require("dotenv").config();

// Database Lib Import
const mongoose = require("mongoose");

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(morgan("dev"));
app.use(nocache());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongo DB Database Connection
mongoose
  .connect(process.env.URL)
  .then((value) => {
    console.log("Database Connected Success");
  })
  .catch((err) => {
    console.log(err);
  });

// Routing Implement
app.use("/api/v1", router);

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
