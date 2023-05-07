import React, { useState } from "react";
import Select from "react-select";
import Navbar from "../../components/Navbar";
import AdminBookingCard from "../../components/admin/AdminBookingCard";
const AdminBookingDashboard = () => {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState();
  let searchByOptions = [
    { label: "Date", value: "createdAt" },
    { label: "Flight Number", value: "flightNumber" },
    { label: "Time", value: "time" },
  ];

  return (
    <div>
      <div>
        <Navbar />
        <div className="manage-booking-container">
          <p className="manage-booking-title">Bookings Dashboard :</p>

          <div className="search-sort-container">
            <Select
              className="select"
              options={searchByOptions}
              value={searchBy}
              defaultValue={searchByOptions[0]}
              onChange={(e) => {
                setSearchBy(e.value);
              }}
            />
            <input
              className="search-input"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="search-button">Search</button>
          </div>
          <div className="admin-booking-card">
            <AdminBookingCard />
            <AdminBookingCard />
            <AdminBookingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingDashboard;
