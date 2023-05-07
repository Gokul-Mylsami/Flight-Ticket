import React from "react";

import "../css/components/SeatingDetails.css";

const SeatingDetails = () => {
  return (
    <div className="seating-details-container">
      <p className="seating-details-title">Seating Details</p>
      <div className="seating-details-seat">
        <p className="seating-details-seat-title">Selected Seats : </p>
        <div className="seating-details-seat-number-container">
          <span className="seating-details-seat-number">E1 , </span>
          <span className="seating-details-seat-number">E1 , </span>
          <span className="seating-details-seat-number">E1 , </span>
          <span className="seating-details-seat-number">E1 , </span>
        </div>
      </div>
      <div>
        <p className="seating-fare-summary">
          <p className="seating-fare-summary-title">Fare Summary</p>
          <div className="seating-fare-container">
            <p className="seating-fare-name">Premium : 1 * 800</p>
            <p className="seating-fare-subtotal">₹ 8,285</p>
          </div>
          <div className="seating-fare-container">
            <p className="seating-fare-name">First Class : 1 * 800</p>
            <p className="seating-fare-subtotal">₹ 8,285</p>
          </div>
          <div className="seating-fare-container">
            <p className="seating-fare-name">Economy : 1 * 800</p>
            <p className="seating-fare-subtotal">₹ 8,285</p>
          </div>
          <div className="seating-fare-container seating-fare-total-container">
            <p className="seating-fare-total-name">Total</p>
            <p className="seating-fare-total">₹ 8,285</p>
          </div>
        </p>
      </div>
      <div className="seating-button-container">
        <button className="seating-button">Book Now </button>
      </div>
    </div>
  );
};

export default SeatingDetails;
