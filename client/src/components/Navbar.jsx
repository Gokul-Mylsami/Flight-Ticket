import React from "react";

import logo from "../assets/logo.png";
import "../css/components/Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <p>AvesAir</p>
      </div>
      <div className="account-details">
        {/* <p className="register button">Register</p>
        <p className="login button">Login</p> */}
        <p className="manage-booking button">Manage Booking</p>
        <p className="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          User
        </p>
      </div>
    </div>
  );
};

export default Navbar;
