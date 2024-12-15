// Ratings component that renders a dropdown menu for selecting a rating
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";

const RatingsDroupDown = () => {
  // Array of rating options
  const ratings = [
    {
      id: 1,
      rating: "Over 4.5",
      starts: (
        <>
          <div className="flex">
            <FaStar className="size-[11px]" />
            <FaStar className="size-[11px]" />
            <FaStar className="size-[11px]" />
            <FaStar className="size-[11px]" />
            <TiStarHalfOutline className="size-[11px]" />
          </div>
        </>
      ),
    },
    {
      id: 2,
      rating: "Over 3.5",
      starts: (
        <>
          <div className="flex">
            <FaStar className="size-[11px]" />
            <FaStar className="size-[11px]" />
            <FaStar className="size-[11px]" />
            <TiStarHalfOutline className="size-[11px]" />
          </div>
        </>
      ),
    },
    {
      id: 3,
      rating: "Over 2.5",
      starts: (
        <>
          <div className="flex">
            <FaStar className="size-[11px]" />
            <FaStar className="size-[11px]" />
            <TiStarHalfOutline className="size-[11px]" />
          </div>
        </>
      ),
    },
    {
      id: 4,
      rating: "Over 1.5",
      starts: (
        <>
          <div className="flex">
            <FaStar className=" size-[11px]" />
            <TiStarHalfOutline className=" size-[11px]" />
          </div>
        </>
      ),
    },
  ];

  // State to track the selected rating and whether the dropdown menu is open
  const [selectedValue, setSelectedValue] = useState("Unrated");
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the click event on a rating option
  const handleOptionClick = (item) => {
    setSelectedValue(item.rating);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to toggle the dropdown menu */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center px-3 py-2 space-x-1 bg-gray-300 rounded-full w-[135px]"
      >
        <span>{selectedValue}</span>
        <FaStar className="fill-yellow-600" />
        <span>|</span>
        {/* Icon to indicate whether the dropdown menu is open or not */}
        {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      {/* Dropdown menu container */}
      <div className="absolute bg-gray-200 rounded-lg">
        {/* Conditionally render the dropdown menu based on the isOpen state */}
        {isOpen && (
          // DroupDown main Container
          <div className="absolute mt-1 bg-gray-200 rounded-xl ">
            {/* DropDown menu Details */}
            {ratings.map((item) => {
              return (
                <button
                  key={item.id}
                  className="flex m-1 rounded-md hover:bg-gray-300"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className=" w-[135px] items-center justify-between flex rounded-full font-semibold">
                    <span className=" text-[11px] m-2">
                      {item.rating}
                    </span>
                    <span className="m-2">{item.starts}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingsDroupDown;
