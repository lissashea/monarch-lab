const mongoose = require("../connection.js");
const monarchData = require("../../db/data/monarchRaw.json");
const kingdomData = require("../../db/data/kingdomRaw.json");
const Monarch = require("../../models/Monarch.js");
const Kingdom = require("../../models/Kingdom.js");

const monarchs = monarchData.map((monarch) => {
  const monarchObj = {
    name: monarch.name,
    house: monarch.house,
    start: monarch.start,
    end: monarch.end,
    endReason: monarch.endReason,
  }
  return monarchObj;
});

const kingdoms = kingdomData.map((kingdom) => ({
  title: kingdom.title,
  extract: kingdom.extract,
}));

// console.log(monarchs)
// console.log(kingdoms)

Monarch
  .then(() => Monarch.deleteMany({}))
  .then(() => Monarch.create(monarchData))
  .then(() => Monarch.create(monarchs))
  .then(() => console.log("Done!"))
  .then(() => mongoose.disconnect())
  .catch((error) => console.log("Error", error));
