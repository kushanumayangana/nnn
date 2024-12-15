import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const CartSummary = () => {
  const {
    cartItems, // Use cartItems
    food_list,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return (
    <div className="pt-0">
      {/* Checkout Section */}
      <div
        onClick={() => navigate("/order")}
        className="flex items-center justify-between py-[4px] mb-1 text-white  bg-[#FF4C00] rounded-lg"
      >
        <button className="text-[16px] md:text-[19px] xl:text-[15px] m-1">
          Checkout
        </button>
        <p className="text-[18px] md:text-[22px] xl:text-[15px] m-1">
          Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}/=
        </p>
      </div>

      {/* Cart Items */}
      <div className="space-y-1">
        {isCartEmpty ? (
          <p className="text-center text-gray-500 text-[16px] md:text-[18px] xl:text-[15px] font-medium px-1 leading-5">
            Your cart is empty. Add items to start shopping!
          </p>
        ) : (
          food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center rounded-lg md:flex-row"
                >
                  {/* Item Image */}
                  <img
                    src={item.cartImg}
                    alt={item.name}
                    className="rounded-lg w-[90px] h-[90px] "
                  />

                  {/* Item Details */}
                  <div className="flex-1 space-y-[4px] px-2 md:px-0 md:mt-0 ml-2">
                    <div className="">
                      <div className="">
                        <p className="text-[16px] md:text-[15px] font-bold leading-tight 2xl:md:text-[18px] xl:text-[13px]">
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] md:text-[15px] text-[#616161] font-Inter leading-tight mb-2 xl:text-[12px]">
                          {truncateText(item.description, 55)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center space-x-1 md:justify-start ">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center justify-center w-6 h-6 bg-black rounded-full"
                      >
                        <FaMinus className="fill-white size-3" />
                      </button>
                      <p className="  bg-[#FF4C00] text-white flex items-center justify-center w-6 h-6 rounded-full">
                        {cartItems[item.id] || 0}
                      </p>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="flex items-center justify-center  bg-[#FF4C00] rounded-full text-white  w-6 h-6"
                      >
                        <FaPlus className="size-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default CartSummary;
