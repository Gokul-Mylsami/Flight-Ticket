import React, { useState } from "react";

import "../css/components/Seats.css";

const Seats = () => {
  const [selected, setSelected] = useState([]);

  const unavailable = {
    E5: true,
    P5: true,
    F5: true,
    E8: true,
    P8: true,
    F8: true,
  };

  const selectHandle = (e) => {
    if (!unavailable[e.target.id]) {
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
        setSelected(selected.filter((seat) => seat !== e.target.id));
      } else {
        console.log(e.target.id);
        e.target.classList.add("selected");
        setSelected([...selected, e.target.id]);
      }
    }
  };

  return (
    <div className="seats">
      <p className="seats-title">Select the Seats</p>
      <div className="seats-container">
        <div className="seat-class-premium-container">
          <div className="seat-class-title-container">
            <div className="seat-class-line"></div>
            <div className="seat-class-title">Premium</div>
            <div className="seat-class-line"></div>
          </div>
          <div className="seats__container">
            {Array(20)
              .fill()
              .map((_, i) => {
                return (
                  <div className={`premium-selected`}>
                    <div
                      key={`P${i + 1}`}
                      className={`seats__seat premium P${i + 1} ${
                        unavailable[`P${i + 1}`] ? "unavailable" : ""
                      }`}
                      id={`P${i + 1}`}
                      onClick={selectHandle}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="seat-class-premium-container">
          <div className="seat-class-title-container">
            <div className="seat-class-line"></div>
            <div className="seat-class-title">First Class</div>
            <div className="seat-class-line"></div>
          </div>
          <div className="seats__container">
            {Array(20)
              .fill()
              .map((_, i) => {
                return (
                  <div
                    key={`F${i + 1}`}
                    className={`seats__seat first-class F${i + 1} ${
                      unavailable[`F${i + 1}`] ? "unavailable" : ""
                    }`}
                    id={`F${i + 1}`}
                    onClick={selectHandle}
                  ></div>
                );
              })}
          </div>
        </div>
        <div className="seat-class-economy-container">
          <div className="seat-class-title-container">
            <div className="seat-class-line"></div>
            <div className="seat-class-title">Economy</div>
            <div className="seat-class-line"></div>
          </div>
          <div className="seats__container-economy">
            {Array(20)
              .fill()
              .map((_, i) => {
                return (
                  <div
                    key={`E${i + 1}`}
                    className={`seats__seat economy E${i + 1} ${
                      unavailable[`E${i + 1}`] ? "unavailable" : ""
                    }`}
                    id={`E${i + 1}`}
                    onClick={selectHandle}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seats;
