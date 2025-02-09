import React from "react";
import Container from "./layer/Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";

const BannerBottom = () => {
  return (
    <div className="py-2 lg:py-7 border-b border-[#F0F0F0] ">
      <Container className="flex justify-between  px-3 lg:px-0 ">
        <p className="flex items-center lg:gap-x-4 font-DM lg:text-base text-sm   text-[#6D6D6D]">
          <PiNumberTwoBold className="text-[#262626] w-5 h-5 lg:flex hidden" />
          Two  years warranty
        </p>
        <p className="flex items-center lg:gap-x-4 font-DM lg:text-base text-sm  text-[#6D6D6D]">
          <FaTruck className="text-[#262626] w-6 h-4 lg:flex hidden" />
          Free  shipping
        </p>
        <p className="flex items-center lg:gap-x-4 font-DM lg:text-base text-sm text-[#6D6D6D] ">
          <FaArrowRotateLeft className="text-[#262626] w-5 h-5 lg:flex hidden" />
          Return  policy in 30 days
        </p>
      </Container>
    </div>
  );
};

export default BannerBottom;
