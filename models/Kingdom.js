// /Users/lissawarshaw/Desktop/repos/ga-sei/labs/monarch-lab/models/Kingdom.js

const mongoose = require("../db/connection");

const KingdomSchema = new mongoose.Schema({
  title: String,
  extract: String,
});

const Kingdom = mongoose.model('Kingdom', KingdomSchema);

module.exports = Kingdom;

// import mongoose from "../db/connection.js";

// const KingdomSchema = new mongoose.Schema({
//   title: String,
//   extract: String,
// });

// const Kingdom = mongoose.model('Kingdom', KingdomSchema);

// export default Kingdom;
