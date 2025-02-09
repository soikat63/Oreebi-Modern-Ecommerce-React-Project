import React from "react";
import { Link } from "react-router-dom";

const ButtonS = ({ className, children, onClick, to }) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
      {/* lg:max-w-[200px] max-w-[120px] */}
        <button className={` lg:h-[50px] h-[38px]  flex items-center justify-center text-[#FFFF]  bg-[#262626] hover:bg-transparent hover:text-[#262626] border border-[#262626] transition-all duration-300 lg:text-base text-sm font-DM ${className}`}
        > {children}</button>
      </Link>
      {/* {children} */}
    </div>
  );
};

export default ButtonS;
// lg:mt-7 lg:py-4 lg:px-20 px-10