import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const Productbrand = () => {
  let [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(!show)}>
        <h3 className=" w-[250px] lg:w-auto  flex items-center justify-between  lg:mb-8 mb-4">
          <span className="font-DM lg:font-bold font-semibold lg:text-xl text-base text-[#262626]  ">
            Shop by Price
          </span>{" "}
          <TiArrowSortedUp className={`${show ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>

      <ul className={`flex flex-col lg:gap-y-5 gap-y-3 ${show ? "block" : "hidden"}`}>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          $0.00 - $9.99
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          $10.00 - $19.99
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          $20.00 - $29.99
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          $30.00 - $39.99
        </li>
        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 font-DM lg:text-base text-sm leading-7 text-[#765d5d]">
          $40.00 - $69.99
        </li>
      </ul>
    </div>
  );
};

export default Productbrand;
