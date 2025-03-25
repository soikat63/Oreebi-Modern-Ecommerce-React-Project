import React from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import Breadcrumb from "./layer/Breadcrumb";
import Input from "./layer/Input";
import ButtonS from "./layer/ButtonS";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="px-5 lg:px-0 lg:mt-[124px] mt-6 lg:mb-[140px] mb-[50px] ">
      <Container>
        <Tittle className="lg:text-[49px] " text="Contacts" />
        <Breadcrumb />
        <div className="lg:mt-[124px] mt-5">
          <Tittle text="Fill up a Form" />
        </div>
        <div className=" flex  flex-col  gap-y-4 lg:mt-[42px] mt-[18px]">
          <Input
            htmlFor=""
            text="Name"
            type="text"
            placeholder="Your name here"
          />
          <Input
            htmlFor=""
            text="Email"
            type="mail"
            placeholder="Your email here"
          />
          <Input
            className="lg:h-[137px] h-[100px]"
            htmlFor=""
            text="Message"
            type="text"
            placeholder="Your message here"
          />
        </div>
        <ButtonS className="lg:mt-[40px] mt-5 lg:mb-[142px] mb-[30px] lg:px-12 px-8">
          Post
        </ButtonS>
        <div className="relative">
          <iframe
            className="lg:w-full h-[572px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1716819351570!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <ul className="lg:w-[451px] w-[200px] bg-[#FFFFFF] absolute lg:top-[121px] top-[80px] lg:left-[72px] left-0">
            <li className=" w-full lg:px-5 px-2 lg:py-[30px] py-[12px] flex items-center justify-between border-b border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-3">
              Germany Office <FaPlus />
            </li>
            <li className=" w-full lg:px-5 px-2 lg:py-[30px] py-[12px] flex items-center justify-between border-b border-[#F0F0F0] font-DM font-bold lg:text-base text-sm lg:leading-6 leading-36">
              Slovakia Office <FaPlus />
            </li>
            <li className=" w-full lg:px-5 px-2 lg:py-[30px] py-[12px]  ">
              <span className="flex items-center justify-between font-DM font-bold lg:text-base text-sm lg:leading-6 leading-3">
                Lithuania Office <FaPlus />{" "}
              </span>
              <span className="font-DM lg:text-base text-sm lg:leading-[30px] leading-[18px] text-[#767676] flex flex-col gap-[11px] mt-5">
                <p>575 Crescent Ave. Quakertown, PA 18951</p>
                <Link href="tel">+432 533 12 523</Link>
                <Link href="mail" target="_blank">
                  info@domain.com
                </Link>
                <p>Mon - Fri: 9am - 6pm</p>
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;


