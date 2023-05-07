import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./screens/Home";
import SearchScreen from "./screens/SearchScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Booking from "./screens/Booking";
import Loading from "./screens/Loading";
import ManageBooking from "./screens/ManageBooking";
import AdminLogin from "./screens/admin/AdminLogin";
import AdminFlightsDashboard from "./screens/admin/AdminFlightsDashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/mybookings" element={<ManageBooking />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/flights" element={<AdminFlightsDashboard />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
};

export default AllRoutes;
