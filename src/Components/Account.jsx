import React from "react";
import Container from "./layer/Container";
import Breadcrumb from "./layer/Breadcrumb";
import Tittle from "./layer/Tittle";

const Account = () => {
  return (
    <div className=" px-5 lg:0 lg:mt-[124px] mt-[30px] lg:mb-[140px] mb-[60px]">
      <Container>
        <Tittle text="My Account" />
        <Breadcrumb />
        <div className="main lg:mt-[127px] mt-8 lg:mb-[140px] lg:flex lg:items-start gap-x-[40px] ">
          <div className="left">
            <ul className="w-[234px] flex flex-col gap-y-5">
              <li className=" w-full pb-4 border-b font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] cursor-pointer">
                Dashboard
              </li>
              <li className=" w-full pb-4 border-b font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] cursor-pointer">
                Others
              </li>
              <li className=" w-full pb-4 border-b font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] cursor-pointer">
                Donwloads
              </li>
              <li className=" w-full pb-4 border-b font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] cursor-pointer">
                Addresses
              </li>
              <li className=" w-full pb-4 border-b font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] cursor-pointer">
                Account details
              </li>
              <li className=" w-full pb-4 border-b font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
          <div className="right max-w-[918px] mt-9 lg:mt-0">
            <p className=" font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676]">
              Hello admin (not admin? Log out)
            </p>
            <p className=" font-DM lg:text-base text-sm lg:leading-[30px] leading-3 text-[#767676] mt-4">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Account;
