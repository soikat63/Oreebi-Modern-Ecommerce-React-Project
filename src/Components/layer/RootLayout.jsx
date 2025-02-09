import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
