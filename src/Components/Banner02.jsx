import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import Ads2 from "../assets/Ads2.jpg"

const Banner02 = () => {
  return (
    <div className="lg:py-[130px] py-[30px] px-3 lg:px-0">
      <Container>
        <div>
          <Image
            className=" w-full object-cover"
            href="/"
            src={Ads2}
            alt="../src/assets/Ads_2.jpg"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner02;
