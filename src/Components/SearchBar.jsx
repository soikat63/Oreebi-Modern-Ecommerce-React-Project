import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Container from "./layer/Container";
import Button from "./layer/Button";
import ButtonS from "./layer/ButtonS";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";

const SearchBar = () => {
  
 let [category, setCategory] = useState (false)
 let [cart, setCart] = useState (false)
 let [ account, setAccount] = useState (false)

 let bars =() =>{
  setCategory(!category)
 }

 let carticon =() =>{
  setCart(!cart)
 }


let accounticon =() =>{
  setAccount(!account)
}




  return (
    <div className="lg:py-5 pt-3  bg-[#F5F5F3] ">
      <Container className="flex lg:items-center justify-between flex-row flex-wrap">
        <div className="relative  pl-3 lg:pl-0">
          <p className="flex items-center gap-x-3 font-DM text-sm  text-[#262626]">
            <RiBarChartHorizontalLine onClick={bars} />
            <span className="hidden lg:inline"> Shop by Category </span>
            <span className="lg:hidden inline">Category</span>
          </p>

          {
            category && (
            <ul className="lg:w-[263px] w-[180px] absolute bg-[#262626] top-full lg:translate-y-[23px] translate-y-[13px] lscroll-p-right-[530px]  flex flex-col z-10  ">
              <li className="group  flex items-center justify-between border-b border-[#D8D8D8]">
                <a
                  className="lg:py-4 py-1.5 px-4 text-slate-300 font-DM text-sm lg:text-base hover:text-white hover:font-bold lg:hover:px-8 hover:px-5 transition-all duration-700"
                  href="/"
                >
                  Accesories
                </a>
                <FaAngleRight className="text-slate-300  hover:text-white hover:font-bold" />
              </li>
              <li className="group w-full flex items-center justify-between  border-b border-[#D8D8D8] ">
                <a
                  className="lg:py-4 py-1.5 px-4 text-slate-300 font-DM text-sm lg:text-base hover:text-white hover:font-bold lg:hover:px-8 hover:px-5 transition-all duration-700"
                  href="/"
                >
                  Furniture
                </a>
                <FaAngleRight className="text-slate-300  hover:text-white hover:font-bold" />
              </li>
              <li className="group w-full flex items-center justify-between  border-b border-[#D8D8D8]">
                <a
                  className="lg:py-4 py-1.5 px-4 text-slate-300 font-DM text-sm lg:text-base hover:text-white hover:font-bold lg:hover:px-8 hover:px-5 transition-all duration-700"
                  href="/"
                >
                  Electronics
                </a>
                <FaAngleRight className="text-slate-300  hover:text-white hover:font-bold" />
              </li>
              <li className="group w-full flex items-center justify-between  border-b border-[#D8D8D8] ">
                <a
                  className="lg:py-4 py-1.5 px-4 text-slate-300 font-DM text-sm lg:text-base hover:text-white hover:font-bold lg:hover:px-8 hover:px-5 transition-all duration-700"
                  href="/"
                >
                  Clothes
                </a>
                <FaAngleRight className="text-slate-300  hover:text-white hover:font-bold" />
              </li>
              <li className="group w-full flex items-center justify-between  border-b border-[#D8D8D8] ">
                <a
                  className="lg:py-4 py-1.5 px-4 text-slate-300 font-DM text-sm lg:text-base hover:text-white hover:font-bold lg:hover:px-8 hover:px-5 transition-all duration-700"
                  href="/"
                >
                  Bags
                </a>
                <FaAngleRight className="text-slate-300  hover:text-white hover:font-bold" />
              </li>
              <li className="groupw-full flex items-center justify-between  border-b border-[#D8D8D8] ">
                <a
                  className="lg:py-4 py-1.5 px-4 text-slate-300 font-DM  text-sm lg:text-base hover:text-white hover:font-bold lg:hover:px-8 hover:px-5 transition-all duration-700"
                  href="/"
                >
                  Home appliances
                </a>
                <FaAngleRight className="text-slate-300  hover:text-white hover:font-bold" />
              </li>
            </ul>
            ) 
          }

        </div>

        {/* -------------------------------------------------------------------------------------------------------- */}

        <div className=" relative order-3 lg:order-2 w-full lg:w-auto mt-3 lg:mt-0">
          <input
            type="text"
            placeholder="Search Products"
            className="lg:w-[601px] w-full bg-white border-b border-[#C4C4C4] lg:border-b-0 lg:py-4 py-2 px-5  border-0 outline-0 font-DM text-sm
          lg:text-base text-[#C4C4C4]"
          />
          <FaSearch className="absolute right-5 top-1/2 translate-y-[-50%]" />
        </div>

        <div className="flex items-center gap-x-10 order-2 lg:order-3 pr-3 lg:pr-0">
          <div  className="flex items-center gap-x-1 relative">
            <FaUser onClick={accounticon} />
            <FaCaretDown />

            {
               account&&(
                <div className="w-[200px] h-[100px] absolute top-[155%] lg:right-0 right-[-70px] z-10 ">
                  <ButtonS to="Account" className="w-full lg:px-0 lg:mt-0">  My Account</ButtonS>
                  <ButtonS to="login" className="w-full"> Log Out</ButtonS>
                 
                </div>
               
               )
            }
          </div>
          {/* ================================================================= */}

          <div className="relative">
            <FaShoppingCart onClick={carticon} />

            {
              cart && (
              <div className="cart lg:w-[360px] w-[290px]  absolute right-0 top-full translate-y-4 z-10   ">
                <div className="flex items-start  bg-red-100 justify-between lg:items-center p-2.5">
                  <div className="top  flex items-center ">
                    <div className="img w-20 h-auto bg-slate-200">
                      <img
                        className="w-full object-cover"
                        src="src/assets/Ad_1.png"
                        alt=""
                      />
                    </div>
                    <div className=" ml-5 font-DM font-bold lg:text-base text-[10px] text-[#262626]  ">
                      <p className="mb-3">Black Smart Watch</p>
                      <p>$44.00</p>
                    </div>
                  </div>
                  <div className="icons font-thin lg:text-[16px] text-[10px]">
                    <ImCross />
                  </div>
                </div>
  
                <div className="bottom lg:py-3 lg:px-3 bg-[#FFFFFF]">
                  <p className="font-DM lg:text-base text-[10px] leading-6 text-[#767676] lg:mb-3">
                    Subtotal:
                    <span className="font-DM font-bold lg:text-base text-[10px] leading-6 text-[#262626]">
                      $44.00
                    </span>
                  </p>
                  <div className="button flex  lg:flex-row gap-1.5 lg:gap-4 ">
                    <Button className="w-full  flex items-center justify-center border border-transparent  hover:border-[#262626] hover:bg-white hover:text-[#262626] transition-all duration-500 cursor-pointer lg:text-base text-[11px] ">
                     <a href="Cart">  View Cart</a>
                    </Button>
                    <Button className="w-full  flex  justify-center border border-transparent  hover:border-[#262626] hover:bg-white hover:text-[#262626] transition-all duration-500 cursor-pointer lg:text-base text-[11px]">  <a href="Checkout">Checkout</a>
                      
                    </Button>
                  </div>
                </div>
              </div>)
            }

            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
