import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import DiliveryImg from '../../assets/cart/img02.png'

const CartItem = ({ item }) => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0 ) {
      setCount(count - 1)
    }
  }

  const [isClicked, setIsClicked] = useState(false);
    
  const toggleIconColor = () => {
    setIsClicked(!isClicked);
    
  }
  return (
    <>
      <div className='relative m-2 '>
        {/* Favorite button */}
        <div className={`absolute right-0 flex items-center justify-center m-2 rounded-full w-7 h-7 ${isClicked ? "bg-orange-500" : "bg-white"}`}>
          <button onClick={toggleIconColor} >
            <FaHeart className={`transition-colors duration-300 ${isClicked ? "fill-white" : "fill-orange-500"}`}/>
          </button>
        </div>
        
        {/* Item Cound */}
        <div className='absolute right-0 flex items-center justify-center gap-1 m-2 text-white bottom-10'>
          {/* Decrement icon button */}
          <div className='flex items-center justify-center bg-white rounded-full w-7 h-7'>
            <button onClick={handleDecrement}>
            <FaMinus className='fill-black'/>
            </button>
          </div>
          
          {/* Count number */}
          <div className='flex items-center justify-center bg-orange-500 rounded-full rjustify-center w-7 h-7'>{count}</div>
          
          {/* Increment icon button */}
          <div className='flex items-center justify-center bg-white rounded-full w-7 h-7'>
            <button onClick={handleIncrement}>
            <FaPlus className='fill-orange-600'/>
            </button>
          </div>
        </div>
        
        <img className='object-cover w-full' src={item.cartImg} alt="" />
        <div className='flex items-center justify-between'>
          <div className='flex flex-row items-center'>
            <span className='text-black text-[15px] sm:text-[15px] font-bold'>{item.name}</span>
          </div>
          <div className='flex flex-row items-center'>
            <span className='text-[#616161] text-[15px] sm:text-[15px]  font-bold'>{item.ratings}</span>
            <span className='text-[#616161] text-[11px] sm:text-[11px]'>({item.ratingsCount})</span>
            <FaPlus className='size-3 fill-[#616161]'/>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2 space-x-1 items-start-center'>
            <img src={DiliveryImg} alt="DiliveryImg" />
            <span className='text-[#616161] text-[12px] sm:text-[12px] font-semibold'>{item.deliveryFee}</span>
            <span className='text-[#616161] text-[12px] sm:text-[12px] font-semibold'>{item.deliveryStatus}</span>
          </div>
          <div className='flex gap-2 space-x-1 items-start-center'>
            <FaClock  className='fill-[#616161]'/>
            <span className='text-[#616161] text-[11px] sm:text-[11px] font-semibold'>{item.deliveryTime}</span>

          </div>
          
        </div>
      </div>
    </>
  );
};

export default CartItem;
