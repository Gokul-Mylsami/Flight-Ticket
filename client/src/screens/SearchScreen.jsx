import React from "react";

import Navbar from "../components/Navbar";
import "../css/screens/SearchScreen.css";
import SearchBar from "../components/Searchbar";

const SearchScreen = () => {
  return (
    <div className="search-screen-section">
      <Navbar />
      <SearchBar />
      <div></div>
    </div>
  );
};

export default SearchScreen;
