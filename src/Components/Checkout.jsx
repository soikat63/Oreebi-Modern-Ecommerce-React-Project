import React from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import Breadcrumb from "./layer/Breadcrumb";
import Input from "./layer/Input";

const Checkout = () => {
  return (
    <div className=" px-5 lg:px-0 lg:my-32 my-6">
      <Container>
        <Tittle className="lg:text-[49px] " text="Checkout" />
        <Breadcrumb />
        <p className="font-DM lg:text-base text-sm lg:leading-[30px] mt-5 lg:mt-32 mb-7 lg:mb-[119px] ">
          {" "}
          <span className="text-[#767676]">Have a coupon?</span>
          <a href="Checkout" className="text-[#262626]">
            Click here to enter your code
          </a>{" "}
        </p>

        <Tittle
          className="lg:text-[49px] mb-5 lg:mb-11 "
          text="Billing Details"
        />
        <div className="flex flex-col gap-y-6 ">
          <div className="flex lg:flex-row flex-col  lg:gap-x-10 gap-y-5">
            <Input
              htmlFor=""
              text="First Name *"
              type="text"
              placeholder="First Name here"
            />
            <Input
              htmlFor=""
              text="Last Name *"
              type="text"
              placeholder="Last Name here"
            />
          </div>

          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Companye Name (optional)"
            type="text"
            placeholder="Company Name"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Country *"
            type="text"
            placeholder="Please select"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Street Address *"
            type="text"
            placeholder="House number and street name"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Town/City *"
            type="text"
            placeholder="Town/City"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="County (optional)"
            type="text"
            placeholder="County"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Post Code *"
            type="text"
            placeholder="Post Code"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Phone *"
            type="number"
            placeholder="Phone"
          />
          <Input
            className="lg:w-[1057px]"
            htmlFor=""
            text="Email Address *"
            type="mail"
            placeholder="Email"
          />
        </div>

        <div className="lg:my-[129px] my-[39px]">
          <Tittle
            className="lg:text-[39px] lg:mb-11 mb-5"
            text="Additional Information"
          />
          <Input
            className="lg:w-[1057px] lg:h-[138px] h-[88px] "
            htmlFor=""
            text="Other Notes (optional)"
            type="text"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>

        <div>
          <Tittle className="lg:text-[39px] lg:mb-12 mb-5" text="Your Order" />
          <div>
            <p className=" lg:w-[604px]  border border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] flex items-center justify-between p-5">
              Product
              <span className="text-[#767676] lg:leading-[30px] leading-4">
                Product
              </span>
            </p>
          </div>
          <div>
            <p className=" lg:w-[604px]  border border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] flex items-center justify-between p-5">
              Product name x 1
              <span className="text-[#767676] lg:leading-[30px] leading-4">
                389.99 $
              </span>
            </p>
          </div>
          <div>
            <p className=" lg:w-[604px]  border border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] flex items-center justify-between p-5">
              Subtotal
              <span className="text-[#767676] lg:leading-[30px] leading-4">
                389.99 $
              </span>
            </p>
          </div>
          <div>
            <p className="lg:w-[604px]  border border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-4 text-[#262626] flex items-center justify-between p-5">
              Total
              <span className="text-[#767676] lg:leading-[30px] leading-4">
                389.99 $
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
