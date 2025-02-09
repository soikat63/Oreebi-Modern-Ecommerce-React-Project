import React from "react";

const Input = ({
  className,
  htmlFor,
  text,
  type,
  placeholder,
  onChange,
  value,
  children,
}) => {
  return (
    <div className={` flex flex-col  lg:w-[507px] w-full lg:h-[67px] h-[51px] border-b relative  ${className} `}>
      <label className="font-DM font-bold lg:text-base text-sm lg:leading-6 leading-3 text-[#262626] lg:mb-[10px] mb-[6px]" htmlFor={htmlFor}> {text} </label>
      <input
        value={value}
        onChange={onChange}
        className="font-DM text-sm lg:leading-6 leading-3 text-[#767676] border-0 outline-0"
        type={type}
        placeholder={placeholder}
      />
      {children}
    </div>
    
  );
};

export default Input;
