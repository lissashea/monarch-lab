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
// Import required modules and data files:

// mongoose module from "../db/connection.js"
// monarchData and kingdomData JSON files from "../db/data/monarchRaw.json" and "../db/data/kingdomRaw.json" respectively
// Monarch and Kingdom models from "../models/Monarch.js" and "../models/Kingdom.js" respectively
// Define two functions to seed the Monarch and Kingdom collections:

// seedMonarchs function maps over monarchData to create an array of monarch objects with the desired schema properties, then deletes all Monarch documents from the database, creates a new collection of Monarchs using the array of monarchs, and logs a success message upon completion (or logs an error message upon error).
// seedKingdoms function maps over kingdomData to create an array of kingdom objects with the desired schema properties, then deletes all Kingdom documents from the database, creates a new collection of Kingdoms using the array of kingdoms, and logs a success message upon completion (or logs an error message upon error).
// Once the database connection is open, execute the following:

// Log a message indicating that the connection is open.
// Use Promise.all to execute both seedMonarchs and seedKingdoms functions simultaneously, and wait for them to complete.
// Disconnect from the database.
// If there is an error with the Promise, log an error message.
// Export the Monarch and Kingdom models.

// import mongoose from "../db/connection.js";
// import monarchData from "../db/data/monarchRaw.json";
// import kingdomData from "../db/data/kingdomRaw.json";
// import Monarch from "../models/Monarch.js";
// import Kingdom from "../models/Kingdom.js";

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
