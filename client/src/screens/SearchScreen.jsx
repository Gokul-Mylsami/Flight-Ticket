import React from "react";

import Navbar from "../components/Navbar";
import "../css/screens/SearchScreen.css";
import SearchBar from "../components/Searchbar";
import FlightDetailsCard from "../components/FlightDetailsCard";
import FilterSidebar from "../components/FilterSidebar";

const SearchScreen = () => {
  return (
    <div className="search-screen-section">
      <Navbar />
      <SearchBar />
      <div className="filter-flight-card-container">
        <FilterSidebar />
        <div>
          <FlightDetailsCard />
          <FlightDetailsCard />
          <FlightDetailsCard />
          <FlightDetailsCard />
          <FlightDetailsCard />
          <FlightDetailsCard />
          <FlightDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
