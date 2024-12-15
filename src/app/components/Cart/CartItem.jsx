import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import DiliveryImg from "../../assets/cart/img02.png";

const CartItem = ({ item }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  const toggleIconColor = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="relative m-2 ">
        <div className="relative">
          <img className="object-cover w-full" src={item.cartImg} alt="" />
          {/* Favorite button */}
          <div
            className={`absolute right-0 top-0 flex items-center justify-center m-2 rounded-full  w-7 h-7 md:w-5 md:h-5 
        ${isClicked ? "bg-orange-500" : "bg-white"}`}
          >
            <button onClick={toggleIconColor}>
              <FaHeart
                className={`transition-colors duration-300 md:size-3 ${
                  isClicked ? "fill-white" : "fill-orange-500"
                }`}
              />
            </button>
          </div>

          {/* Item Cound */}
          <div className="absolute bottom-0 right-0 flex items-center justify-center gap-1 m-2 text-white">
            {/* Decrement icon button */}
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5">
              <button onClick={handleDecrement}>
                <FaMinus className="fill-black md:size-3" />
              </button>
            </div>

            {/* Count number */}
            <div className="flex items-center justify-center bg-orange-500 rounded-full rjustify-center w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5">
              {count}
            </div>

            {/* Increment icon button */}
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 sm:w-6 sm:h-6 md:w-5 md:h-5">
              <button onClick={handleIncrement}>
                <FaPlus className="fill-orange-600 md:size-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <span className="text-black text-[15px] sm:text-[15px] font-bold md:text-[12px]">
              {item.name}
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-[#616161] text-[15px] sm:text-[15px] md:text-[10px] font-bold">
              {item.ratings}
            </span>
            <span className="text-[#616161] text-[11px] sm:text-[11px] md:text-[7px]">
              ({item.ratingsCount})
            </span>
            <FaPlus className="size-2 fill-[#616161] md:size-3" />
          </div>
        </div>

        {/* Dilivery details */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 space-x-0 items-start-center">
            <img
              className="sm:h-4 md:h-3 "
              src={DiliveryImg}
              alt="DiliveryImg "
            />
            <span className="text-[#616161] text-[12px] sm:text-[12px] font-semibold md:text-[9px]">
              {item.deliveryFee}
            </span>
            <span className="text-[#616161] text-[12px] sm:text-[12px] font-semibold md:text-[8px]">
              {item.deliveryStatus}
            </span>
          </div>
          <div className="flex gap-1 space-x-0 items-start-center">
            <FaClock className="fill-[#616161] md:size-3" />
            <span className="text-[#616161] text-[11px] sm:text-[11px] font-semibold md:text-[9px]">
              {item.deliveryTime}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
