import React, { useState } from "react";
import AdminFlightsCard from "../../components/admin/AdminFlightsCard";
import Navbar from "../../components/Navbar";
import Select from "react-select";

import "../../css/screens/AdminFlightsDashboard.css";
const AdminFlightsDashboard = () => {
  const [searchBy, setSearchBy] = useState();
  const [search, setSearch] = useState("");
  let searchByOptions = [
    { label: "Flight Name", value: "name" },
    { label: "Flight Number", value: "flightNumber" },
    { label: "Origin", value: "originPlace" },
    { label: "Destination", value: "destinationPlace" },
  ];
  return (
    <div>
      <Navbar />
      <div className="admin-flights-dashboard">
        <h3 className="admin-flights-dashboard-title">Flights Dashboard</h3>
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
        <div className="admin-flight-card">
          <AdminFlightsCard />
        </div>
      </div>
    </div>
  );
};

export default AdminFlightsDashboard;
