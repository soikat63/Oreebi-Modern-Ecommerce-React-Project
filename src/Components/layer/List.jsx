import React from "react";
import { Link } from "react-router-dom";

const List = ({ href, text }) => {
  return (
    <li>
      <Link className='font-DM text-[#767676] font-bold text-sm after:content-[""] after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:absolute relative after:hover:w-full after:transition-all after:duration-300 hover:text-black hover:transition-all hover:duration-300 '  to={href}> {text} </Link>
    </li>
  );
};

export default List;
