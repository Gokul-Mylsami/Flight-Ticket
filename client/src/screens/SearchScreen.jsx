import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/screens/SearchScreen.css";
import SearchBar from "../components/Searchbar";
import FlightDetailsCard from "../components/FlightDetailsCard";
import FilterSidebar from "../components/FilterSidebar";
import { useSelector, useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
import { setAirports, setFlights } from "../features/flightSlice";
import Loading from "./Loading";

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { airports, flights } = useSelector((state) => state.flight);

  useEffect(() => {
    if (airports.length <= 0) {
      fetchAirports();
    }

    if (flights.length <= 0) {
      fetchFlights();
    }
  }, [airports]);

  const fetchAirports = async () => {
    setLoading(true);
    const response = await fetch("api/v1/flights/airports");
    const data = await response.json();
    if (data.status === "success") {
      dispatch(setAirports(data.data));
    } else {
      NotificationManager.error(data.message, "Error");
    }
    setLoading(false);
  };

  const fetchFlights = async () => {
    const response = await fetch("api/v1/flights/");
    const data = await response.json();
    if (data.status === "success") {
      console.log(data.data);
      dispatch(setFlights(data.data));
    } else {
      NotificationManager.error(data.message, "Error");
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="search-screen-section">
      <Navbar />
      <SearchBar />
      <div className="filter-flight-card-container">
        <FilterSidebar />

        <div>
          {flights.map((flight) => {
            return <FlightDetailsCard key={flight._id} flight={flight} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
