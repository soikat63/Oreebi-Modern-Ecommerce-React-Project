import React from "react";

const Tittle = ({ className, text }) => {
  return (
    <h1
      className={`font-DM font-bold lg:text-[39px] text-[20px] text-[#262626] ${className}`}>
      {text}
    </h1>
  );
};

export default Tittle;
