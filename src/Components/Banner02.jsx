import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";

const Banner02 = () => {
  return (
    <div className="lg:py-[130px] py-[30px] px-3 lg:px-0">
      <Container>
        <div>
          <Image
            className=" w-full object-cover"
            href="/"
            src="../src/assets/Ads_2.jpg"
            alt="../src/assets/Ads_2.jpg"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner02;
