import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <p className="flex items-center lg:mt-3 mt-1 font-DM text-sm text-[#767676] capitalize">
      Home <FiChevronRight />{" "}
      <span>{window.location.pathname.split("/")[1]}</span>
    </p>
  );
};

export default Breadcrumb;
