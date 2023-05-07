import React from "react";
import Navbar from "../components/Navbar";
import Seats from "../components/Seats";
import SeatingDetails from "../components/SeatingDetails";

import "../css/screens/Booking.css";

const Booking = () => {
  return (
    <div>
      <Navbar />
      <div className="seating-billing-container">
        <div>
          <Seats />
        </div>
        <div>
          <SeatingDetails />
        </div>
      </div>
    </div>
  );
};

export default Booking;
