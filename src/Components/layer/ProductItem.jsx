import React from "react";
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

export const ProductItem = ({ className, offer, src, alt, price, text }) => {
  return (
   <div className="flex gap-x-10 mx-auto ">
      <div className={` lg:w-[370px] w-[300px]  group ${className}   `}>
      <div className="image w-full  bg-slate-400 relative overflow-hidden">
        
          <Link to="/productinside">
            <img className="w-full h-full object-contain" src={src} alt={alt} />
          </Link>
       

        <Button className={`absolute left-5 top-5 ${className}`}>
          {offer}
        </Button>
        <div className="overlay absolute bottom-0 translate-y-[100%] left-0 bg-white group-hover:translate-y-[0] transition-all duration-500 lg:py-6 py-3 lg:pr-8 pr-3  w-full ">
          <ul>
            <li className="flex items-center justify-end gap-x-4 font-DM lg:text-base text-sm cursor-pointer text-[#767676]">
              Add to Wish List <FaHeart className="text-[#262626] " />
            </li>
            <li className="flex items-center justify-end gap-x-4 py-5 font-DM lg:text-base text-sm  cursor-pointer text-[#767676]">
              Compare <TfiReload className="text-black font-extrabold" />
            </li>
            <li className="flex items-center justify-end gap-x-4 font-DM font-bold lg:text-base text-sm cursor-pointer text-[#262626]">
              Add to Cart <FaShoppingCart className="text-[#262626]" />
            </li>
          </ul>
        </div>
      </div>
      <div className="text lg:mt-6 mt-3 ">
        <p className=" flex justify-between font-DM font-bold lg:text-[20px] text-sm text-[#262626] ">
          {text}
          <p className="font-DM font-normal lg:text-[16px] text-sm text-[#767676] lg:leading-7">
            {price}
          </p>
        </p>
        <p className="font-DM font-normal lg:text-[16px] text-sm text-[#767676] lg:leading-7 ">
          Black
        </p>
      </div>
      </div>
     
   </div>
  );
};
