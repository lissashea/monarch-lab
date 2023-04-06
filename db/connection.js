// /Users/lissawarshaw/Desktop/repos/ga-sei/labs/monarch-lab/db/connection.js

const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/monarch-api";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;


// import mongoose from "mongoose";

// mongoose.Promise = global.Promise;

// const mongoURI = "mongodb://localhost/monarch-api";

// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((instance) =>
//     console.log(`Connected to db: ${instance.connections[0].name}`)
//   )
//   .catch((err) => console.log("Connection Failed.", err));

// export default mongoose;
