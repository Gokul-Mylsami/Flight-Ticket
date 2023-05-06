import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SearchScreen from "./screens/SearchScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
