import React from "react";
import Container from "./layer/Container";
import Breadcrumb from "./layer/Breadcrumb";
import Tittle from "./layer/Tittle";
import Image from "./layer/Image";
import ButtonS from "./layer/ButtonS";
import PI01 from "../assets/PI01.png"
import PI02 from "../assets/PI02.png"


const About = () => {
  return (
    <div className="px-5 lg:px-0 lg:mt-[124px] mt-6">
      <Container>
        <Tittle className="lg:text-[49px]" text="About" />
        <Breadcrumb />
        <div className="flex justify-between items-center gap-x-3 lg:mt-[136px] mt-5 lg:mb-[128px] mb-8">
          <div className=" lg:w-[780px] w-[160px]  lg:h-[776px] h-auto  relative">
            <Image
              className=" w-full h-full "
              src={PI01}
              alt="./src/assets/BS01.png"
            ></Image>
            <ButtonS className="absolute lg:bottom-[62px] bottom-2 left-[50%] -translate-x-[50%] lg:w-[281px] w-[120px] lg:h-[76px] h-auto lg:text-base text-sm lg:font-bold font-DM ">
              Our Brands
            </ButtonS>
          </div>
          <div className=" lg:w-[780px] w-[160px]  lg:h-[776px] h-auto  relative">
            <Image
              className=" w-full h-full "
              src={PI02}
              alt="./src/assets/BS01.png"
            ></Image>
            <ButtonS className="absolute lg:bottom-[62px] bottom-2 left-[50%] -translate-x-[50%] lg:w-[281px] w-[120px] lg:h-[76px] h-auto lg:text-base text-sm lg:font-bold font-DM ">
              Our Brands
            </ButtonS>
          </div>
        </div>

        <Tittle
          className=" lg:mb-[118px] mb-8 lg:leading-[54px] leading-0 lg:font-bold font-light "
          text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
        />

        <div className="lg:mb-[163px] mb-16">
          <ul className=" lg:flex lg:justify-between flex flex-col lg:flex-row  gap-y-4 lg:gap-y-0  ">
            <li>
              <h6 className="font-DM font-bold lg:text-[25px] text-[18px] lg:leading-[30px] leading-0 text-[#262626]">
                Our Vision
              </h6>
              <p className="font-DM lg:text-base text-sm lg:leading-[30px] leading-0 text-[#767676] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </li>
            <li>
              <h6 className="font-DM font-bold lg:text-[25px] text-[18px] lg:leading-[30px] leading-0 text-[#262626]">
                Our Vision
              </h6>
              <p className="font-DM lg:text-base text-sm lg:leading-[30px] leading-0 text-[#767676] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </li>
            <li>
              <h6 className="font-DM font-bold lg:text-[25px] text-[18px] lg:leading-[30px] leading-0 text-[#262626]">
                Our Vision
              </h6>
              <p className="font-DM lg:text-base text-sm lg:leading-[30px] leading-0 text-[#767676] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
