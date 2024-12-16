import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FaPlus, FaMinus, FaHeart, FaClock } from "react-icons/fa";
import FoodItemModel from "./FoodItemModel";

// Component for individual cart item
const CartItem = ({ item }) => {
  // Get cart-related functions and items from the StoreContext
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // State to track whether the favorite button is clicked
  const [isClicked, setIsClicked] = React.useState(false);
  const toggleIconColor = () => {
    setIsClicked(!isClicked);
  };
  // State for managing the modal (food item details popup)
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  

  return (
    <div>
      <div className="relative m-2">
        <div className="relative">
          {/* Favorite (heart) button */}
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

          {/* Item count controls (increment and decrement) */}
          <div className="absolute bottom-0 right-0 flex items-center justify-center gap-1 m-2 text-white">
            {/* Decrement button */}
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7">
              <button onClick={() => removeFromCart(item.id)}>
                <FaMinus className="fill-black" />
              </button>
            </div>

            {/* Current item quantity */}
            <div className="flex items-center justify-center bg-orange-500 rounded-full w-7 h-7">
              {cartItems[item.id] || 0}
            </div>

            {/* Increment button */}
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7">
              <button onClick={() => addToCart(item.id)}>
                <FaPlus className="fill-orange-600" />
              </button>
            </div>
          </div>

          {/* Food item image (opens modal on click) */}
          <img
            onClick={handleOpenModal}
            className="object-cover w-full"
            src={item.cartImg}
            alt=""
          />
        </div>

        {/* Food item name and ratings */}
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <span className="text-black text-[15px] sm:text-[15px] xl:text-[20px] font-bold">
              {item.name}
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-[#616161] text-[15px] sm:text-[15px] font-bold">
              {item.ratings}
            </span>
            <span className="text-[#616161] text-[11px] sm:text-[11px]">
              ({item.ratingsCount})
            </span>
            <FaPlus className="size-3 fill-[#616161]" />
          </div>
        </div>

        {/* Placeholder row for additional actions or info */}
        <div className="flex items-center justify-between">
          <span className="font-extrabold 2xl:text-[20px] xl:text-[18px] text-red-500">
            <span className="2xl:text-[15px] xl:text-[13px]">Rs.</span>
            {item.price}
            <span className="text-gray-500 2xl:text-[15px] xl:text-[13px] ml-1 ">Rs.</span>
            <span className="line-through text-gray-500 2xl:text-[17px] xl:text-[15px]">{item.offerPrice}</span>
            
          </span>
          <span className="font-extrabold 2xl:text-[18px] xl:text-[15px] text-red-500">
            {item.offer}% Off
          </span>
        </div>

        {/* Delivery fee and status */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-start-center">
            <img className="w-5 h-4" src="/Test/assets/cart/img02.png" alt="DeliveryImg" />
            <span className="text-[#616161] text-[12px] sm:text-[12px] font-semibold">
              {item.deliveryFee}
            </span>
            <span className="text-[#616161] text-[12px] sm:text-[12px] font-semibold">
              {item.deliveryStatus}
            </span>
          </div>

          {/* Delivery time */}
          <div className="flex space-x-1 items-start-center">
            <FaClock className="fill-[#616161]" />
            <span className="text-[#616161] text-[11px] sm:text-[11px] font-semibold">
              {item.deliveryTime}
            </span>
          </div>
        </div>
      </div>

      {/* Food item modal component */}
      <FoodItemModel
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={item}
      />
    </div>
  );
};

export default CartItem;
