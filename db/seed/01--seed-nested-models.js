// /Users/lissawarshaw/Desktop/repos/ga-sei/labs/monarch-lab/db/seed/01--seed-nested-models.js

const mongoose = require("../db/connection");
const monarchData = require("../db/data/monarchRaw.json");
const Monarch = require("../models/Monarch");
const Kingdom = require("../models/Kingdom");

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");

  // Find all Monarchs in the database
  Monarch.find({})
    .then((monarchs) => {
      // For each Monarch, find the corresponding Kingdom and set the 'kingdom' field
      monarchs.forEach((monarch) => {
        const kingdomName = monarchData.find((m) => m.name === monarch.name)?.kingdom;
        if (kingdomName) {
          Kingdom.findOne({ title: kingdomName })
            .then((kingdom) => {
              monarch.kingdom = kingdom._id;
              monarch.save()
                .then(() => console.log(`Added kingdom ${kingdom.title} to monarch ${monarch.name}`))
                .catch((error) => console.log(`Error updating monarch ${monarch.name}:`, error));
            })
            .catch((error) => console.log(`Error finding kingdom ${kingdomName}:`, error));
        }
      });
    })
    .catch((error) => console.log("Error finding Monarchs:", error))
    .finally(() => mongoose.disconnect());
});


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
