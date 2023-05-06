const express = require("express");
const router = express.Router();

const bookingController = require("../controller/bookingController");

router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBooking);
router.post("/", bookingController.createBooking);

module.exports = router;
