import React from "react";

const Button = ({ className, children }) => {
  return (
    <div
      className={`${className} px-8 py-2 bg-[#262626] text-white font-DM font-bold text-sm`}
    >
      {children}
    </div>
  );
};

export default Button;
