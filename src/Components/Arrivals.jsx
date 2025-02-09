import React from "react";
import { ProductItem } from "./layer/ProductItem";
import Container from "./layer/Container";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Tittle from "./layer/Tittle";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" lg:w-16 w-8 lg:h-16 h-8 rounded-full bg-black/20 absolute lg:right-5 right-7 top-1/2 translate-y-[-50%] !flex items-center justify-center "
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" lg:w-16 w-8 lg:h-16 h-8 rounded-full bg-black/20 absolute lg:left-5 left-7 top-1/2 translate-y-[-50%] !flex   items-center justify-center z-10 "
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
}

const Arrivals = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-3 lg:px-0">
      <Container>
        <Tittle
          className="lg:pb-12 pb-4 pl-3.5 lg:pl-0  "
          text="New Arrivals"
        />
      </Container>

      <Container className="max-w-[1640px]">
        <div>
          <Slider {...settings}>
            <div>
              <ProductItem
                className="mx-auto"
                offer="10%"
                src="../src/assets/PI01.png"
                alt="../src/assets/PI01.png"
                text="  Basic Crew Neck Tee"
                price="$44.00"
              />
            </div>
            <div>
              <ProductItem
                className="mx-auto"
                offer="10%"
                src="../src/assets/PI02.png"
                alt="../src/assets/PI02.png"
                text="  Basic Crew Neck Tee"
                price="$44.00"
              />
            </div>
            <div>
              <ProductItem
                className="mx-auto"
                offer="10%"
                src="../src/assets/PI03.png"
                alt="../src/assets/PI03.png"
                text="  Basic Crew Neck Tee"
                price="$44.00"
              />
            </div>
            <div>
              <ProductItem
                className="mx-auto"
                offer="10%"
                src="../src/assets/PI04.jpg"
                alt="../src/assets/PI04.jpg"
                text="  Basic Crew Neck Tee"
                price="$44.00"
              />
            </div>
            <div>
              <ProductItem
                className="mx-auto"
                offer="10%"
                src="../src/assets/PI01.png"
                alt="../src/assets/PI01.png"
                text="  Basic Crew Neck Tee"
                price="$44.00"
              />
            </div>
            <div>
              <ProductItem
                className="mx-auto"
                offer="10%"
                src="../src/assets/PI02.png"
                alt="../src/assets/PI02.png"
                text="  Basic Crew Neck Tee"
                price="$44.00"
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Arrivals;
