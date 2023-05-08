import React from "react";
import Select from "react-select";
import { setAirports } from "../features/flightSlice";
import {
  setDepartureDate,
  setDestinationPlace,
  setOriginPlace,
  setReturnDate,
  setClassValue,
  setPassengersCount,
} from "../features/filterSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const airports = useSelector((state) => state.flight.airports);
  const {
    originPlace,
    destinationPlace,
    passengers,
    departureDate,
    returnDate,
    classValue,
  } = useSelector((state) => state.filter);

  let classValues = [
    {
      label: "Economy",
      value: "economy",
    },
    {
      label: "Business",
      value: "business",
    },
    {
      label: "First Class",
      value: "first-class",
    },
  ];
  return (
    <div className="search-bar-container">
      <div>
        <p className="search-bar-text">From : </p>
        <Select
          className="select search-select"
          placeholder="Select Origin"
          required
          defaultValue={{ label: originPlace, value: originPlace }}
          options={airports}
        />
      </div>
      <div>
        <p className="search-bar-text">To :</p>
        <Select
          className="select search-select"
          placeholder="Select Destination"
          required
          defaultValue={{ label: destinationPlace, value: destinationPlace }}
          options={airports}
        />
      </div>
      <div>
        <p className="search-bar-text">Depart :</p>
        <input
          type="date"
          className="home-input"
          value={departureDate}
          onChange={(e) => {
            dispatch(setDepartureDate(e.target.value));
          }}
        />
      </div>
      <div>
        <p className="search-bar-text">Passengers :</p>
        <input
          className="home-input"
          type="number"
          min={1}
          max={6}
          value={passengers}
          required
        />
      </div>
      <div>
        <p className="search-bar-text">Class :</p>
        <Select
          className="select search-select"
          required
          placeholder="Select Class"
          defaultValue={{ label: classValue, value: classValue }}
          onChange={(e) => {
            dispatch(setClassValue(e.value));
          }}
          options={classValues}
        />
      </div>
      <div>
        <button className="search-search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
