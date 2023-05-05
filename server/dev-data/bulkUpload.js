const mongoose = require("mongoose");
const Flight = require("./../Models/flightModel");
const dotenv = require("dotenv");
const flightData = require("./flights.json");

dotenv.config({ path: "./../.env" });
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});

Flight.insertMany(flightData)
  .then((docs) => {
    console.log(`${docs.length} flights inserted.`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
// Tour.deleteMany({}, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("All records have been deleted from the collection.");
//   }
//   mongoose.connection.close();
// });
