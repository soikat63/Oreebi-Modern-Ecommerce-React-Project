import React from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import { ProductItem } from "./layer/ProductItem";
import SO01 from "../assets/SO01.jpg"
import SO02 from "../assets/SO02.jpg"
import SO03 from "../assets/SO03.jpg"
import SO04 from "../assets/SO04.jpg"

const SpecialOffers = () => {
  return (
    <div className="pb-[106px] px-3 lg:px-0">
      <Container>
        <Tittle
          className=" lg:pb-12 pb-4 pl-3.5 lg:pl-0"
          text="Special Offers"
        />
      </Container>

      <div>
        <Container className="lg:flex justify-between flex-wrap">
          <ProductItem
            offer="New"
            src={SO01}
            alt="../src/assets/SO01.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src={SO02}
            alt="../src/assets/SO02.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src={SO03}
            alt="../src/assets/SO03.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
          <ProductItem
            offer="New"
            src={SO04}
            alt="../src/assets/SO04.jpg"
            text="  Basic Crew Neck Tee"
            price="$44.00"
          />
        </Container>
      </div>
    </div>
  );
};

export default SpecialOffers;
