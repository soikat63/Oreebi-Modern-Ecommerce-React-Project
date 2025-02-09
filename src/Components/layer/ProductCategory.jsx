import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  let[arrowshow, setarrowshow] =useState(true);
  let [show, setShow] = useState(false);
  let [show01, setShow01] = useState(false);

  return (
    <div>
       <div onClick={() => setarrowshow(!arrowshow)}>
        <h3 className=" w-[250px] lg:w-auto  flex items-center justify-between  lg:mb-8 mb-4">
          <span className="font-DM lg:font-bold font-semibold lg:text-xl  text-base text-[#262626]  ">
          Shop by Category
          </span>{" "}
          <TiArrowSortedUp className={`${arrowshow ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>
      
      <ul className={`"flex flex-col gap-y-5" ${arrowshow ? "block" : "hidden"}`}>
        <li
          className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 lg:mb-5 mb-2"
          onClick={() => setShow(!show)}
        >
          <Link className=" flex justify-between relative ">
            <span className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#767676]">
              Category 1
            </span>{" "}
            <FaPlus
              className={`absolute top-1/2 translate-y-[-50%] right-0 transition-all duration-400 ${
                show ? "opacity-0 invisible" : "opacity-100 visible rotate-90"
              }`}
            />{" "}
            <FaMinus
              className={`absolute top-1/2 translate-y-[-50%] right-0 ${
                show ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
          </Link>

          <ul className={` py-4 ${show ? "block" : "hidden"}`}>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li className="border-b border-[#F0F0F0] lg:pb-10 pb-4 lg:mb-5 mb-2">
          <Link className=" flex justify-between relative  ">
            <span className="font-DM  lg:text-base text-xs lg:leading-7 leading-4 text-[#767676]">
              Category 2
            </span>
          </Link>
        </li>

        <li className=" border-b border-[#F0F0F0] lg:pb-10 pb-4 lg:mb-5 mb-2 "
          onClick={() => setShow01(!show01)}
        >
          <Link className=" flex justify-between relative ">
            <span className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#767676]">
              Category 3
            </span>{" "}
            <FaPlus
              className={`absolute top-1/2 translate-y-[-50%] right-0 transition-all duration-400 ${
                show01 ? "opacity-0 invisible" : "opacity-100 visible rotate-90"
              }`}
            />{" "}
            <FaMinus
              className={`absolute top-1/2 translate-y-[-50%] right-0 ${
                show01 ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
          </Link>

          <ul className={`py-4 ${show01 ? "block" : "hidden"}`}>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li className="border-b border-[#F0F0F0] lg:pb-10 pb-4 lg:mb-5 mb-2">
          <Link className=" flex justify-between relative  ">
            <span className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#767676]">
              Category 4
            </span>
          </Link>
        </li>

        <li className="border-b border-[#F0F0F0] lg:pb-10 pb-4 lg:mb-5 mb-2">
          <Link className=" flex justify-between relative  ">
            <span className="font-DM lg:text-base text-xs lg:leading-7 leading-4 text-[#767676]">
              Category 5
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategory;
