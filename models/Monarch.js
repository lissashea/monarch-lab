// /Users/lissawarshaw/Desktop/repos/ga-sei/labs/monarch-lab/models/Monarch.js


const mongoose = require("../db/connection");

const MonarchSchema = new mongoose.Schema({
  name: String,
  house: String,
  start: Date,
  end: Date,
  endReason: String,
  kingdom: { type: mongoose.Schema.Types.ObjectId, ref: 'Kingdom' }
});

const Monarch = mongoose.model('Monarch', MonarchSchema);

module.exports = Monarch;
// import mongoose from "../db/connection.js";

// const MonarchSchema = new mongoose.Schema({
//   name: String,
//   house: String,
//   start: Date,
//   end: Date,
//   endReason: String,
//   kingdom: { type: mongoose.Schema.Types.ObjectId, ref: 'Kingdom' }
// });

// const Monarch = mongoose.model('Monarch', MonarchSchema);

// export default Monarch;
