import React from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import { ProductItem } from "./layer/ProductItem";
import BS01 from "../assets/BS01.jpg"
import BS02 from "../assets/BS02.jpg"
import BS03 from "../assets/BS03.jpg"
import BS04 from "../assets/BS04.jpg"
const BestSeller = () => {
  return (
    <div className="lg:pt-[128px] pt-[24px] px-3 lg:px-0">
      <Container>
        <Tittle className=" lg:pb-12 pb-4 pl-3.5 lg:pl-0" text=" Best Seller" />
      </Container>
      <div className="items-center">
        <Container className=" lg:flex flex-wrap gap-y-2 justify-center items-center lg:justify-between">
          <ProductItem
            offer="New"
            src={BS01}
            alt="../src/assets/BS01.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src={BS02}
            alt="../src/assets/BS02.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src={BS03}
            alt="../src/assets/BS03.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src={BS04}
            alt="../src/assets/BS04.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
        </Container>
      </div>
    </div>
  );
};

export default BestSeller;
