import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductItem } from "./layer/ProductItem";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
  98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
  95, 96, 97, 98, 99, 100, 
  
  
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div >
            <ProductItem
              // className="mx-auto"
              offer="10%"
              src="../src/assets/PI01.png"
              alt="../src/assets/PI01.png"
              text="  Basic Crew Neck Tee"
              price="$44.00"
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-12 ">
        <Items currentItems={currentItems} />
      </div>

      <div className=" lg:flex items-center justify-between mt-12 lg:mb-7 mb-3 ">
        <ReactPaginate className="overflow-hidden flex lg:gap-x-3.5 gap-x-1.5 "
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousClassName="hidden"
          nextClassName="hidden"
          renderOnZeroPageCount={null}
          // ul class name start
          containerClassName="pagination flex gap-x-4 "
          // ul class name end

          // li class name start
          pageClassName="page-item  lg:w-9 w-6 lg:h-9 h-6 border border-[#F0F0F0] text-[#767676]"
          // li class name end

          // a class name start
          pageLinkClassName="page-link  w-full h-full flex items-center justify-center font-DM text-sm"
          // a class name end

          // active class name start
          activeClassName="active text-[#FFFFFF] bg-[#262626] "
          // active class name end
        />
        <p className="text-xs lg:text-[18px] lg:mt-0 mt-2">
          Products from {itemOffset + 1} to{" "}
          {endOffset > items.length ? items.length : endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;
