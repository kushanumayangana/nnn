import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

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
    <div className="p-4 mt-[-15px] ">
      {/* Checkout Section */}
      <div
        onClick={() => navigate("/order")}
        className="flex items-center justify-between px-4 py-2 mb-4 text-white  bg-[#FF4C00] rounded-lg"
      >
        <button className="text-[15px] md:text-[16px]">Checkout</button>
        <p className="text-[18px] md:text-[20px]">
          Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}/=
        </p>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {isCartEmpty ? (
          <p className="text-center text-gray-500 text-[15px] md:text-[15px] font-medium px-2">
            Your cart is empty. Add items to start shopping!
          </p>
        ) : (
          food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div
                key={item.id}
                className="flex flex-col xl:flex-row items-center p-2 bg-white rounded-lg shadow-md h-auto xl:h-[136px] md:space-x-4  "
              >
                {/* Item Image */}
                <img
                  src={item.cartImg}
                  alt={item.name}
                  className="object-cover w-full h-[180px] md:w-[210px] lg:w-[136px] md:h-[136px] rounded-lg "
                />
              
                {/* Item Details */}
                <div className="flex-1 px-2 md:px-4 2xl-ml-[-30px] ">
                  <div>
                    <p className="mb-1 text-[15px] font-bold leading-tight md:text-[16px] xl:text-[15px] ">
                      {item.name}
                    </p>
                    <p
                      className="mb-3 text-[12px] text-[#616161] leading-tight md:text-[13px] line-clamp-2 md:line-clamp-3"
                    >
                      {truncateText(item.description, 20)}
                    </p>
                  </div>
              
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center justify-center text-lg font-bold text-white bg-black rounded-full w-7 h-7"
                    >
                      <img src="/Test/Home/minus.png" alt="minus" />
                    </button>
                    <p className="text-lg font-bold w-7 h-7 bg-[#FF4C00] rounded-full text-white flex items-center justify-center">
                      {cartItems[item.id] || 0}
                    </p>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center justify-center w-7 h-7 text-lg font-bold bg-[#FF4C00] rounded-full text-white"
                    >
                      <img src="Test/Home/plus.png" alt="plus" />
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
