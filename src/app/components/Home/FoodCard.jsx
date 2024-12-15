import React, { useContext, useState } from 'react';
import { StoreContext } from "../../context/StoreContext";
import { FaPlus, FaMinus, FaHeart, FaClock } from "react-icons/fa";
import FoodItemModel from "./FoodItemModel";

const CartItem = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const [isClicked, setIsClicked] = React.useState(false);
  const toggleIconColor = () => {
    setIsClicked(!isClicked);
  };

  //Food Model Set (foodItem_popup)
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
    <div className='relative m-2'>
      {/* Favorite Button */}
      <div
        className={`absolute right-0 flex items-center justify-center m-2 rounded-full w-7 h-7 ${
          isClicked ? "bg-orange-500" : "bg-white"
        }`}
      >
        <button onClick={toggleIconColor}>
          <FaHeart
            className={`transition-colors duration-300 ${
              isClicked ? "fill-white" : "fill-orange-500"
            }`}
          />
        </button>
      </div>

      {/* Item Count */}
      <div className='absolute right-0 flex items-center justify-center gap-1 m-2 text-white bottom-10'>
        {/* Decrement Button */}
        <div className='flex items-center justify-center bg-white rounded-full w-7 h-7'>
          <button onClick={() => removeFromCart(item.id)}>
            <FaMinus className='fill-black' />
          </button>
        </div>

        {/* Item Quantity */}
        <div className='flex items-center justify-center bg-orange-500 rounded-full w-7 h-7'>
          {cartItems[item.id] || 0}
        </div>

        {/* Increment Button */}
        <div className='flex items-center justify-center bg-white rounded-full w-7 h-7'>
          <button onClick={() => addToCart(item.id)}>
            <FaPlus className='fill-orange-600' />
          </button>
        </div>
      </div>

      <img onClick={handleOpenModal} className='object-cover w-full' src={item.cartImg} alt="" />
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
            <img src="/Test/assets/cart/img02.png" alt="DiliveryImg" />
            <span className='text-[#616161] text-[12px] sm:text-[12px] font-semibold'>{item.deliveryFee}</span>
            <span className='text-[#616161] text-[12px] sm:text-[12px] font-semibold'>{item.deliveryStatus}</span>
          </div>
          <div className='flex gap-2 space-x-1 items-start-center'>
            <FaClock  className='fill-[#616161]'/>
            <span className='text-[#616161] text-[11px] sm:text-[11px] font-semibold'>{item.deliveryTime}</span>

          </div>
          
        </div>
    </div>

     {/* Model FoodItem */}
     <FoodItemModel
     isOpen={isModalOpen}
     onClose={handleCloseModal}
     product={item}
   />
   </div>
   
  );
};

export default CartItem;
