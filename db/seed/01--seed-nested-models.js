// /Users/lissawarshaw/Desktop/repos/ga-sei/labs/monarch-lab/db/seed/01--seed-nested-models.js

const mongoose = require('../connection.js');
const Monarch = require('../../models/Monarch.js');
const Kingdom = require('../../models/Kingdom.js');

let updateData = async () => {
  let kingdoms = await Kingdom.find({});

  kingdoms.forEach(async (element) => {
    const kingdom = await Kingdom.findOne({ title: element.title });
    await Monarch.updateMany(
      { kingdom: element._id },
      { $set: { kingdom: kingdom._id } }
    );
  });

  let check = await Monarch.find({});
  console.log(check);
};

updateData().then(() => mongoose.disconnect())



// import mongoose from "../db/connection.js";
// import monarchData from "../db/data/monarchRaw.json";
// import Monarch from "../models/Monarch.js";
// import Kingdom from "../models/Kingdom.js";

// mongoose.connection.once("open", async () => {
//   console.log("Connected to MongoDB!");

//   try {
//     const monarchs = await Monarch.find({});
//     monarchs.forEach(async (monarch) => {
//       const kingdomName = monarchData.find((m) => m.name === monarch.name)?.kingdom;
//       if (kingdomName) {
//         try {
//           const kingdom = await Kingdom.findOne({ title: kingdomName });
//           monarch.kingdom = kingdom._id;
//           await monarch.save();
//           console.log(`Added kingdom ${kingdom.title} to monarch ${monarch.name}`);
//         } catch (error) {
//           console.log(`Error finding kingdom ${kingdomName}:`, error);
//         }
//       }
//     });
//   } catch (error) {
//     console.log("Error finding Monarchs:", error);
//   } finally {
//     mongoose.disconnect();
//   }
// });
