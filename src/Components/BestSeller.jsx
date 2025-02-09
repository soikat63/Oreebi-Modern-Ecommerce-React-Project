import React from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import { ProductItem } from "./layer/ProductItem";

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
            src="../src/assets/BS01.jpg"
            alt="../src/assets/BS01.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src="../src/assets/BS02.jpg"
            alt="../src/assets/BS02.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src="../src/assets/BS03.jpg"
            alt="../src/assets/BS03.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src="../src/assets/BS04.jpg"
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
