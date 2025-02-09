import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import Ad1 from "../assets/Ad1.png"
import Ad2 from "../assets/Ad2.png"
import Ad3 from "../assets/Ad3.png"

const OfferPrice = () => {
  return (
    <div className=" lg:pt-[174px] pt-7 lg:pb-[128px] pb-6 px-4 lg:px-0">
      <Container className=" flex justify-between gap-x-2 lg:gap-x-0">
        <div className="left lg:w-[780px] w-auto lg:h-[780px] h-auto ">
          <Image
            className="w-full h-full object-contain"
            src={Ad1}
            alt="./src/assets/Ad_1.png"
          />
        </div>

        <div className="left lg:w-[780px] w-auto lg:h-[780px] h-auto  flex flex-col justify-between">
          <div className="top lg:w-full w-auto lg:h-[370px] h-auto ">
            <Image
              className="w-full h-full object-contain"
              src={Ad2}
              alt="./src/assets/Ad_2.png"
            />
          </div>

          <div className="bottom lg:w-full w-auto lg:h-[370px] h-auto ">
            <Image
              className=" w-full h-full object-contain"
              src={Ad3}
              alt="./src/assets/Ad_3.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OfferPrice;
