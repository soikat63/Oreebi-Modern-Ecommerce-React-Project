import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const Productbrand = () => {
  let [show, setShow] = useState(false);
  return (
    <div>
      <div  onClick={() => setShow(!show)} >
        <h3 className=" w-[250px] lg:w-auto  flex items-center justify-between lg:mb-8 mb-4">
          <span className="font-DM lg:font-bold font-semibold lg:text-xl text-base text-[#262626]  ">
            Shop by Brand
          </span>{" "}
          <TiArrowSortedUp className={`${show ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>

      <ul className={`flex flex-col lg:gap-y-5 gap-y-3 ${show ? "block" : "hidden"}`}>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          Brand 1
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          Brand 2
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          Brand 3
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          Brand 4
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          Brand 5
        </li>
      </ul>
    </div>
  );
};

export default Productbrand;
