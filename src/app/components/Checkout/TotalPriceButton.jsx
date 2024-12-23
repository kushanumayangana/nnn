import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";


const TotalPriceButton = () => {
  const {
      cartItems, // Use cartItems
      getTotalCartAmount,
    } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      {/* Checkout Section */}
      <div
        onClick={() => navigate("/orderconfirmation")}
        className="flex items-center justify-between py-[4px] mb-1 text-white  bg-[#FF4C00] rounded-lg"
      >
        <button className="text-[16px] md:text-[19px] xl:text-[15px] m-1 ml-2">
          Checkout
        </button>
        <p className="text-[18px] md:text-[22px] xl:text-[15px] m-1">
          Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}.00
        </p>
      </div>
    </>
  );
};

export default TotalPriceButton;
