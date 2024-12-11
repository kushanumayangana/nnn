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
    <div className="p-4 mt-[-22px]">
      {/* Checkout Section */}
      <div
        onClick={() => navigate("/order")}
        className="flex items-center justify-between px-4 py-2 mb-4 text-white  bg-[#FF4C00] rounded-lg"
      >
        <button className="text-[16px] md:text-[19px]">Checkout</button>
        <p className="text-[18px] md:text-[22px]">
          Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}/=
        </p>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {isCartEmpty ? (
          <p className="text-center text-gray-500 text-[16px] md:text-[18px] font-medium px-2">
            Your cart is empty. Add items to start shopping!
          </p>
        ) : (
          food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center p-[2px] bg-white rounded-lg shadow-md h-auto md:h-[136px]"
                >
                  {/* Item Image */}
                  <img
                    src={item.cartImg}
                    alt={item.name}
                    className="object-cover w-full h-[180px] md:w-[136px] md:h-[136px] mr-0 md:mr-4 rounded-lg"
                  />

                  {/* Item Details */}
                  <div className="flex-1 space-y-[4px] px-2 md:px-0 mt-2 md:mt-0">
                    <div className="mt-[-12px]">
                      <div className="mb-[6px]">
                        <p className="text-[16px] md:text-[15px] font-bold leading-tight xl:text-[18px] 2xl:md:text-[18px]">
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-[14px] md:text-[15px] text-[#616161] font-Inter leading-tight mb-2">
                          {truncateText(item.description, 55)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center mt-4 space-x-2 md:justify-start ">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-black rounded-full"
                      >
                        <img src="/Test/Home/minus.png" alt="minus" />
                      </button>
                      <p className="text-lg font-bold w-8 h-8 bg-[#FF4C00] rounded-full text-white flex items-center justify-center">
                        {cartItems[item.id] || 0}
                      </p>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="flex items-center justify-center w-8 h-8 text-lg font-bold bg-[#FF4C00] rounded-full text-white"
                      >
                        <img src="Test//Home/plus.png" alt="plus" />
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
