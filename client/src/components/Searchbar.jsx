import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div>
        <p className="search-bar-text">From : </p>
        <Select className="select search-select" />
      </div>
      <div>
        <p className="search-bar-text">To :</p>
        <Select className="select search-select" />
      </div>
      <div>
        <p className="search-bar-text">Depart :</p>
        <DatePicker className="home-input" />
      </div>
      <div>
        <p className="search-bar-text">Passengers :</p>
        <input className="home-input" type="number" min={1} max={6} />
      </div>
      <div>
        <p className="search-bar-text">Class :</p>
        <Select className="select search-select" />
      </div>
      <div>
        <button className="search-search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
