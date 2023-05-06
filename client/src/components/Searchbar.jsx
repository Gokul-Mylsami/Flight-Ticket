import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div>
        <p className="search-bar-text">FROM</p>
        <Select className="select search-select" />
      </div>
      <div>
        <p className="search-bar-text">TO</p>
        <Select className="select search-select" />
      </div>
      <div>
        <p className="search-bar-text">DEPART</p>
        <DatePicker className="home-input" />
      </div>
      <div>
        <p className="search-bar-text">PASSENGERS</p>
        <input className="home-input" type="number" min={1} max={6} />
      </div>
      <div>
        <button className="search-search-button">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchBar;
