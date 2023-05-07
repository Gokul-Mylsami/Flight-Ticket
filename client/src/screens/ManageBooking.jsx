import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

import "../css/screens/ManageBooking.css";
const ManageBooking = () => {
  const [cancelBooking, setCancelBooking] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  return (
    <>
      <div>
        <Navbar />
        <div className="manage-booking-container">
          <p className="manage-booking-title">My Bookings :</p>

          <div className="manage-booking-card">
            <div>
              <p className="manage-booking-card-title">Booking ID :</p>
              <p className="manage-booking-card-content">123456789</p>
            </div>
            <div>
              <p className="manage-booking-card-title">Booking Date :</p>
              <p className="manage-booking-card-content">12/12/2021</p>
            </div>
            <div>
              <p className="manage-booking-card-title">Flight Name :</p>
              <p className="manage-booking-card-content">Air India</p>
            </div>
            <div>
              <p className="manage-booking-card-title">Seats Booked :</p>
              <p className="manage-booking-card-content">E2,F2,E3</p>
            </div>
            <div className="">
              <button
                className="manage-booking-cancel-button"
                onClick={() => {
                  setCancelBooking(true);
                  setDeleteId(1);
                }}
              >
                Cancel My Booking
              </button>
            </div>
          </div>
        </div>
      </div>
      {cancelBooking && (
        <Modal
          isModalOpen={cancelBooking}
          setIsModalOpen={setCancelBooking}
          setDeleteId={setDeleteId}
        >
          <p className="model-booking-cancel-text">
            Are you sure ! , You want to cancel
          </p>
          <div className="model-booking-cancel-button-container">
            <button className="model-booking-yes-button">Yes</button>
            <button
              className="model-booking-no-button"
              onClick={() => {
                setCancelBooking(false);
              }}
            >
              No
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ManageBooking;
