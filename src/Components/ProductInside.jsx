import React, { useState } from "react";
import Container from "./layer/Container";
import Breadcrumb from "./layer/Breadcrumb";
import Tittle from "./layer/Tittle";
import ButtonS from "./layer/ButtonS";
import Input from "./layer/Input";
import Slider from "react-slick";
import Image from "./layer/Image";
import "../Components/layer/ProductDetails.css";
import { Link } from "react-router-dom";
import { FaCircle, FaStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

const ProductInside = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div>
        <ul className="mx-auto flex gap-x-4  justify-center"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className=" slider lg:w-[80px] w-12 lg:h-[80px] h-12   "></div>
    ),
  };

  let [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5">
      <Container>
        <Breadcrumb />
        <div className=" Product_Image  lg:mt-[100px] mt-4 lg:flex lg:gap-x-20 ">
          {/* -------------product/slider----start--------------- */}
          <div className="max-w-[600px] lg:h-[600px] ">
            <Slider {...settings}>
              <div className="w-full h-full ">
                <Image
                  className="w-full h-full object-contain"
                  href="/Product"
                  src="../src/assets/BS04.jpg"
                  alt="../src/assets/Image01.png"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-contain"
                  href="/Product"
                  src="../src/assets/BS03.jpg"
                  alt="../src/assets/Image01.png"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-contain"
                  href="/Product"
                  src="../src/assets/BS02.jpg"
                  alt="../src/assets/Image01.png"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-contain"
                  href="/Product"
                  src="../src/assets/BS01.jpg"
                  alt="../src/assets/Image01.png"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  className="w-full h-full object-contain"
                  href="/"
                  src="../src/assets/PI01.png"
                  alt="../src/assets/Image01.png"
                />
              </div>
            </Slider>
          </div>
          {/* -------------product/slider----end--------------- */}
          {/* -------------details----start--------------- */}
          <div className="Products_Details lg:mt-0 mt-5 lg:w-1/2">
            <Tittle text="Product Tittle" />
            {/* This section in use for review-part - start */}
            <div className="flex items-center gap-x-8">
              <div className="flex items-center gap-x-2 text-[#FFD881]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="font-DM text-sm text-[#767676]"> 1 Review</p>
            </div>
            {/* This section in use for review-part - end */}

            {/* priceing --section --start */}
            <div className=" flex items-center gap-x-6 mt-4  border-b">
              <p className=" line-through font-DM lg:text-base text-sm text-[#767676] ">
                $88.00
              </p>
              <Tittle className="text-[16px]" text="  $ 40.00 " />
            </div>
            {/* priceing --section --end */}

            {/* This section in use for colour -start */}
            <div className=" colour flex items-center gap-x-14 lg:my-9 my-5">
              <p className="font-DM font-bold lg:text-[22px] text-base text-[#262626]uppercase">
                Colour :
              </p>
              <div className="icon flex gap-x-4">
                <FaCircle className="text-[#434242]" />
                <FaCircle className="text-[#FF8686]" />
                <FaCircle className="text-[#7ED321]" />
                <FaCircle className="text-[#B6B6B6]" />
                <FaCircle className="text-[#15CBA5]" />
              </div>
            </div>
            {/* This section in use for colour -end */}

            {/* This section in use for size -start */}
            <div className="flex items-center lg:gap-x-[92px] gap-x-[76px] lg:my-9 my-5">
              <label htmlFor="">
                <p className="font-DM font-bold lg:text-[22px] text-base text-[#262626]   uppercase">
                  Size :
                </p>
              </label>
              <select
                name=""
                id=""
                className="font-DM lg:text-[20px] text-base text-[#262626] outline-0 w-[139px] h-[36px] border px-5 py-1 "
              >
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
              </select>
            </div>
            {/* This section in use for size -end */}

            {/* This section in use for quantity -start */}
            <div className="flex items-center gap-x-7">
              <p className="font-DM font-bold lg:text-[22px] text-base text-[#262626]">
                QUANTITY :
              </p>
              <div className="flex items-center justify-between  w-[139px] h-[36px] border px-5 py-1 ">
                <span onClick={()=> quantity <=1 ? setQuantity(1) : setQuantity(quantity-1) } className="p-1 ">
                <FiMinus  />
                </span>
                <span>{quantity}</span>
                <span onClick={()=> setQuantity (quantity+1)} className="p-1  ">
                  <FiPlus />
                </span>
                
              </div>
            </div>

            {/* This section in use for quantity -end */}

            {/* This section in use for button -start */}
            <div className=" lg:flex  items-center lg:gap-x-10 mt-4">
              <ButtonS className="lg:flex hidden">Add To Wish List</ButtonS>
              <ButtonS>Add To Cart</ButtonS>
            </div>
            {/* This section in use for button -end */}

            <div className="Features_details mt-7 font-DM ">
              <p className="font-semibold lg:text-[22px] text-[18px]">
                FEATURES & DETAILS
              </p>
              <p className=" Description w-full  overflow-hidden lg:text-[19px] text-sm py-1 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                in eius quis dicta asperiores doloribus, at cum dolor officia.
                Sint veniam expedita illo nulla, sunt aspernatur fugit officia
                minima inventore odit at necessitatibus. Dolorem modi impedit
                necessitatibus ipsam eos, est nostrum debitis voluptatibus dolor
                totam deleniti, non aspernatur repellendus, exercitationem
                doloremque recusandae sed? Vel iure accusamus illo ipsam
                eligendi facere cum repellat commodi ipsum in et doloremque,
                omnis maiores illum totam odit obcaecati nulla quo dolores, sunt
                ducimus ipsa minus consequuntur. Incidunt, ad. Maxime incidunt
                sed corrupti, sunt illum voluptates nemo, tempore earum, cumque
                nihil distinctio animi perferendis nisi ipsam.{" "}
              </p>
            </div>
          </div>
          {/* -------------details----end--------------- */}
        </div>
        <div>
          <div className="lg:mt-[124px] mt-5">
            <Tittle text="Add a Review" />
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
              text="Review"
              type="text"
              placeholder="Your review here"
            />
          </div>
          <ButtonS className="lg:mt-[40px] mt-5 lg:mb-[142px] mb-[30px]">
            Post
          </ButtonS>
        </div>
      </Container>
    </div>
  );
};

export default ProductInside;
