import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SearchScreen from "./screens/SearchScreen";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchScreen />} />
    </Routes>
  );
};

export default AllRoutes;
