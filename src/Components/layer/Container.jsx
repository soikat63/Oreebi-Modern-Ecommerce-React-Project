import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`${className} max-w-[1600px] mx-auto`}>{children}</div>
  );
};

export default Container;
