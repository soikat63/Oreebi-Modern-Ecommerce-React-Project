import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";

const ProductColour = () => {
  let [show, setShow] = useState(false);

  return (
    <div>
      <div onClick={() => setShow(!show)}>
        <h3 className=" w-[250px] lg:w-auto  flex items-center justify-between  lg:mb-8 mb-4">
          <span className="font-DM lg:font-bold font-semibold lg:text-xl  text-base text-[#262626]  ">
            Shop by Color
          </span>{" "}
          <TiArrowSortedUp className={`${show ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>

      <ul className={`flex flex-col lg:gap-y-5 gap-y-3 lg:mb-0 mb-5 ${show ? "block" : "hidden"}`}>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] lg:pb-10 pb-4 ">
          <FaCircle />{" "}
          <span className="font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
            Color 1
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] lg:pb-10 pb-4 ">
          <FaCircle className="text-[#FF8686]" />{" "}
          <span className="font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
            Color 2
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] lg:pb-10 pb-4 ">
          <FaCircle className="text-[#7ED321]" />{" "}
          <span className="font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
            Color 3
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] lg:pb-10 pb-4 ">
          <FaCircle className="text-[#B6B6B6]" />{" "}
          <span className="font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
            Color 4
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] lg:pb-10 pb-4 ">
          <FaCircle className="text-[#15CBA5]" />{" "}
          <span className="font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
            Color 5
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductColour;
