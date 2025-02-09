import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import List from "./layer/List";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    function size() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    size();

    window.addEventListener("resize", size);
  }, []);

  let menu = () => {
    setShow(!show);
  };

  return (
    <nav className="bg-[#FFFFFF]">
      <Container className="flex items-center justify-between lg:py-6 py-4    relative ">
        <div className="logo pl-3 lg:pl-0">
          <Image
            href="/"
            src="../src/assets/logo.png"
            alt="../src/assets/logo.png"
          />
        </div>

        <div
          className={`menu w-full flex justify-center bg-red-400 lg:bg-transparent absolute left-0 top-full lg:static py-7 lg:py-0 px-4 lg:px-0 z-10 transition-all duration-500 ${
            show ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex items-center flex-col lg:flex-row gap-x-12 ">
            <List href="/" text="Home" />
            <List href="/product" text="Shop" />
            <List href="/about" text="About" />
            <List href="/contacts" text="Contacts" />
            <List href="/signup" text="Signup"/>
          
          </ul>
        </div>

        <div className="pr-3 lg:pr-0">
          <FaBars onClick={menu} className="lg:hidden " />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
