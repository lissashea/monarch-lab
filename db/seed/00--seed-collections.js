// /Users/lissawarshaw/Desktop/repos/ga-sei/labs/monarch-lab/db/seed/00--seed-collections.js

const mongoose = require("../connection.js");
const monarchData = require("../data/monarchRaw.json");
const kingdomData = require("../data/kingdomRaw.json");
const Monarch = require("../../models/Monarch.js");
const Kingdom = require("../../models/Kingdom.js");

const seedMonarchs = () => {
  const monarchs = monarchData.map((monarch) => ({
    name: monarch.name,
    house: monarch.house,
    start: new Date(monarch.start),
    end: new Date(monarch.end),
    endReason: monarch.endReason
  }));

  return Monarch.deleteMany({})
    .then(() => Monarch.create(monarchs))
    .then(() => console.log("Monarch collection seeded!"))
    .catch((error) => console.log("Error seeding Monarch collection:", error));
};

const seedKingdoms = () => {
  const kingdoms = kingdomData.map((kingdom) => ({
    title: kingdom.title,
    extract: kingdom.extract
  }));

  return Kingdom.deleteMany({})
    .then(() => Kingdom.create(kingdoms))
    .then(() => console.log("Kingdom collection seeded!"))
    .catch((error) => console.log("Error seeding Kingdom collection:", error));
};

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");

  Promise.all([seedMonarchs(), seedKingdoms()])
    .then(() => mongoose.disconnect())
    .catch((error) => console.log("Error seeding collections:", error));
});


import mongoose from "../db/connection.js";
import monarchData from "../db/data/monarchRaw.json";
import kingdomData from "../db/data/kingdomRaw.json";
import Monarch from "../models/Monarch.js";
import Kingdom from "../models/Kingdom.js";

// const seedMonarchs = async () => {
//   const monarchs = monarchData.map((monarch) => ({
//     name: monarch.name,
//     house: monarch.house,
//     start: new Date(monarch.start),
//     end: new Date(monarch.end),
//     endReason: monarch.endReason
//   }));

//   try {
//     await Monarch.deleteMany({});
//     await Monarch.create(monarchs);
//     console.log("Monarch collection seeded!");
//   } catch (error) {
//     console.log("Error seeding Monarch collection:", error);
//   }
// };

// const seedKingdoms = async () => {
//   const kingdoms = kingdomData.map((kingdom) => ({
//     title: kingdom.title,
//     extract: kingdom.extract
//   }));

//   try {
//     await Kingdom.deleteMany({});
//     await Kingdom.create(kingdoms);
//     console.log("Kingdom collection seeded!");
//   } catch (error) {
//     console.log("Error seeding Kingdom collection:", error);
//   }
// };

// mongoose.connection.once("open", async () => {
//   console.log("Connected to MongoDB!");

//   try {
//     await Promise.all([seedMonarchs(), seedKingdoms()]);
//   } catch (error) {
//     console.log("Error seeding collections:", error);
//   } finally {
//     mongoose.disconnect();
//   }
// });
