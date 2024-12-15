// Price component that renders a dropdown menu for selecting a price range
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const PriceDroupDown = () => {
  // State to track whether the dropdown menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the click event on the "Price Range" button
  const handleOptionClick = () => {
    setIsOpen(false);
  }
  
  return (
    <div className="">
      {/* Button to toggle the dropdown menu */}
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <div className="flex items-center  justify-between px-3 py-2 space-x-1 bg-gray-300 rounded-full w-[150px] ">
          <span>Price</span>
          {/* Icon to indicate whether the dropdown menu is open or not */}
          {/* Note: The icons are swapped, it should be FaAngleDown when isOpen is false and FaAngleUp when isOpen is true */}
          {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </button>
      {/* Dropdown menu that is conditionally rendered based on the isOpen state */}
      {isOpen && (
        // DroupDown menu main container
        <div className="absolute mt-1 bg-gray-200 w-[150px] rounded-xl">
          <span className="text-[11px] pl-3 font-semibold">Select You Price Range</span>
          {/* Input fields for minimum and maximum price */}
          <div className="text-[13px] pl-3 flex items-center justify-between pr-3 pt-3">
            <span>Min</span>
            <input
              className="w-[90px] appearance-none rounded-[4px]"
              type="text"
            />
          </div>
          <div className="text-[13px] pl-3 flex items-center justify-between pr-3 py-3">
            <span>Max</span>
            <input
              className="w-[90px] appearance-none rounded-[4px] "
              type="text"
            />
          </div>

          {/* Button to apply the selected price range */}
          <div className="flex items-center justify-center py-1 mx-2 mb-3 bg-gray-600 rounded-full">
            <button className="text-[15px] text-white"
            onClick={()=> handleOptionClick()}
            >Price Range</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDroupDown;