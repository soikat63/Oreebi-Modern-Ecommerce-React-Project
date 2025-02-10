import React, { useState } from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import Breadcrumb from "./layer/Breadcrumb";
import { RxCross2 } from "react-icons/rx";
import Image from "./layer/Image";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ButtonS from "./layer/ButtonS";
import { Link } from "react-router-dom";
import BS01 from "../assets/BS01.jpg"

const Cart = () => {
  // --------------------------------------------------
  let [quantity, setQuantity] = useState(1);

  // ------------------------------------------------

  return (
    <div className=" px-5 lg:px-0 lg:mt-[135px] mt-7 lg:mb-36 mb-10 relative ">
      <Container>
        <Tittle className="lg:text-[49px]" text="Cart" />
        <Breadcrumb />
        <div className="lg:mt-[136px] mt-11">
          <div className="lg:max-w-[1600px] border border-[#F0F0F0] mb-1">
            <ul className=" lg:px-5 lg:py-[30px] bg-[#F5F5F3] lg:flex justify-between lg:gap-x-[360px] hidden">
              <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626]">
                Product
              </li>
              <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626]">
                Price
              </li>
              <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626]">
                Quantity
              </li>
              <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626]">
                Total
              </li>
            </ul>
            {/* ============== */}

            <ul className="lg:max-w-[1600px] lg:px-5  flex lg:flex-row flex-col lg:items-center justify-between  lg:gap-x-[123px] ">
              <div>
                <li className="  flex lg:items-center flex-col lg:flex-row  gap-y-5 lg:gap-y-0    ">
                  <RxCross2 className="font-bold text-[22px] hidden lg:inline" />
                  <Image
                    className="lg:w-[120px] object-contain lg:ml-10 mr-2"
                    src={BS01}
                    alt="/src/assets/BS01.jpg"
                  />
                  <p className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] py-4">
                    Product Name{" "}
                  </p>
                </li>
              </div>

              <div className="lg:w-[1065px] flex lg:flex-row flex-col lg:justify-between justify-start gap-y-5 lg:gap-y-0">
                <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] ">
                  $44.00
                </li>
                <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] border border-[#F0F0F0] lg:px-[21px]  py-1 flex items-center lg:gap-x-[69px] gap-x-6 justify-center  ">
                  <FaMinus
                    onClick={() =>
                      quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
                    }
                  />
                  <p>{quantity}</p>
                  <FaPlus onClick={() => setQuantity(quantity + 1)} />
                </li>
                <li className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] ">
                  $44.00
                </li>
              </div>
            </ul>
          </div>

          <div className="lg:max-w-[1600px] border border-[#F0F0F0] px-5 py-2.5 flex items-center justify-between lg:flex-row flex-col gap-y-4 lg:gap-y-0">
            <div className="flex lg:flex-row flex-col items-center gap-5">
              <select
                name=""
                id=""
                className="w-[255px] border border-[#F0F0F0] px-4 py-2 outline-0 bg-transparent font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626]"
              >
                <option className="p-7" value="SIZE">
                  SIZE
                </option>
                <option className="p-7" value="Featured">
                  SM
                </option>
                <option className="p-7" value="Featured">
                  M
                </option>
                <option className="p-7" value="Featured">
                  L
                </option>
                <option className="p-7" value="SIFeaturedZE">
                  XL
                </option>
                <option className="p-7" value="SIFeaturedZE">
                  XXL
                </option>
              </select>
              <p className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626]">
                Apply coupon
              </p>
            </div>
            <div>
              <p className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] cursor-pointer">
                Update cart
              </p>
            </div>
          </div>
        </div>

        <div className=" lg:mt-[54px] mt-[34px] flex justify-end">
          <div className="w-[664px] flex flex-col gap-4">
            <Tittle
              className=" w-full flex justify-end lg:text-[20px] "
              text="Cart totals"
            />
            <div>
              <p className=" w-full  border border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] flex items-center !justify-between p-5">
                subtotal
                <span className="text-[#767676] lg:leading-[30px] leading-4">
                  389.99 $
                </span>
              </p>
              <p className="w-full  border border-t-0 border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] flex items-center justify-between p-5">
                subtotal
                <span className="text-[#767676] lg:leading-[30px] leading-4">
                  389.99 $
                </span>
              </p>
            </div>

            <div className="flex justify-end">
              <ButtonS className="lg:w-full max-w-[178px] px-4 lg:px-0">
                <a href="Checkout"> Proceed to Checkout</a>
              </ButtonS>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
