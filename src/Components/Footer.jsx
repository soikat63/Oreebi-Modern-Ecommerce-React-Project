import React from "react";
import Container from "../Components/layer/Container";
import { Link } from "react-router-dom";
import Image from "../Components/layer/Image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:py-14 py-7 bg-[#F5F5F3]">
      <Container>
        <div className="up lg:flex items-start gap-x-[256px]">
          <div className="menu lg:flex items-start gap-x-[150px]">
            <ul className=" pb-5 lg:pb-0 pl-5 lg:pl-0">
              <h5 className="lg:pb-4  font-DM font-bold text-base leading-5 text-[#262626]">
                MENU
              </h5>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Home
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Shop
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  About
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Contact
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Journal
                </Link>
              </li>
            </ul>
            <ul className=" pb-5 lg:pb-0 pl-5 lg:pl-0">
              <h5 className="lg:pb-4 font-DM font-bold text-base leading-5 text-[#262626]">
                Shop
              </h5>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Category 1
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Category 2{" "}
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Category 3
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Category 4
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Category 5
                </Link>
              </li>
            </ul>
            <ul className=" pb-5 lg:pb-0 pl-5 lg:pl-0">
              <h5 className="lg:pb-4 font-DM font-bold text-base leading-5 text-[#262626]">
                HELP
              </h5>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Special E-shop
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Shipping
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  Secure Payments
                </Link>
              </li>
            </ul>
            <ul className=" pb-5 lg:pb-0 pl-5 lg:pl-0">
              <h5 className="lg:pb-4 font-DM font-bold text-base leading-5 text-[#262626]">
                Contact
              </h5>
              <li>
                <Link
                  className=" font-DM text-base font-bold leading-7 text-[#262626] "
                  to=" tel:052 611-5711"
                >
                  (052) 611-5711
                </Link>
              </li>
              <li>
                <Link
                  className=" font-DM text-base font-bold leading-7 text-[#262626] target:blank"
                  href="/"
                >
                  company@domain.com
                </Link>
              </li>
              <li>
                <Link className=" font-DM text-sm leading-5 text-[#6D6D6D]">
                  575 Crescent Ave. Quakertown, PA 18951
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo pl-5 lg:pl-0">
            <Image
              href="/"
              src="../src/assets/footerlogo.png"
              alt="../src/assets/footerlogo.png"
            />
          </div>
        </div>
        <div className="down lg:pt-16 pt-8 pl-5 lg:pl-0 lg:flex items-center justify-between">
          <div className="icon flex items-center lg:gap-x-6 gap-x-3 mb-4 lg:mb-0 text-[#373737]">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </div>
          <div className=" font-DM text-sm leading-5 text-[#6D6D6D]">
            2024 Orebi Minimal eCommerce Figma Template By Adveits
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
