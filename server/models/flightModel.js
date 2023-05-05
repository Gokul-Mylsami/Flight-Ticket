const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the flight name"],
  },
  flightNumber: {
    type: String,
    required: [true, "Please enter the flight number"],
  },
  economyPrice: {
    type: Number,
    required: [true, "Please enter the economy price"],
  },
  firstClassPrice: {
    type: Number,
    required: [true, "Please enter the first class price"],
  },
  premiumClassPrice: {
    type: Number,
    required: [true, "Please enter the premium class price"],
  },
  economySeats: {
    type: Number,
    default: 20,
  },
  firstClassSeats: {
    type: Number,
    default: 20,
  },
  premiumClassSeats: {
    type: Number,
    default: 20,
  },
  checkIn: {
    type: String,
    required: [true, "Please enter the check in Weight limit"],
  },
  originPlace: {
    type: String,
    required: [true, "Please enter the from place"],
  },
  destinationPlace: {
    type: String,
    required: [true, "Please enter to place"],
  },
  departureDate: {
    type: Date,
    required: [true, "Please enter the departure date"],
  },
  arrivalDate: {
    type: Date,
    required: [true, "Please enter the arrival date"],
  },
  international: {
    type: Boolean,
    required: [true, "Please enter the international"],
  },
});

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
