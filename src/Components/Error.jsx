import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import { IoSearch } from "react-icons/io5";
import ButtonS from "./layer/ButtonS";
import Footer from "./Footer";

const Error = () => {
  return (
    <div className="px-5 lg:px-0">
      <Navbar />
      <SearchBar />
      <Container>
        <Tittle
          className="lg:text-[200px] !text-[100px] font-DM font-bold"
          text="404"
        />
        <div className="lg:w-[644px] ">
          <p className="lg:w-full font-DM lg:text-base text-sm lg:leading-[30px] leading-5 text-[#767676]">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
        </div>
        <div className="px-5 lg:py-5 py-3 border lg:w-[643px] flex items-center justify-between lg:mt-[50px] mt-9 lg:mb-[60px] mb-6">
          <input
            className="border-0 outline-0"
            type="text"
            placeholder="Type to search"
          />
          <IoSearch />
        </div>
        <ButtonS className="lg:mb-[161px] mb-[61px]">Back to Home</ButtonS>
      </Container>
      <Footer />
    </div>
  );
};

export default Error;
