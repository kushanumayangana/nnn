import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  // State for Sub-total and Delivery Fee
  const [subTotal] = useState(8000);
  const [deliveryFee] = useState(200);

  // Calculate Total Amount
  const totalAmount = subTotal + deliveryFee;

  return (
    <div>
      {/* Sub-total and Delivery Fee */}
      <div className="flex justify-between ">
        <div className="flex flex-col justify-start leading-8">
          <span className="font-semibold text-[18px] text-[#4C4A4A]">
            Sub-total
          </span>
          <span className="font-semibold text-[18px] text-[#4C4A4A]">
            Delivery Fee
          </span>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-[23px] font-bold text-[#4C4A4A]">
            Rs.{subTotal}.00
          </span>
          <span className="text-[23px] font-bold text-[#4C4A4A]">
            Rs.{deliveryFee}.00
          </span>
        </div>
      </div>

      {/* Total Amount */}
      <div className="text-white text-[18px] mt-3 w-[368px] h-[58px] px-6 py-3 font-medium bg-[#FF4C00] hover:bg-orange-600 rounded-[8px] flex items-center justify-between">
        <span className="text-[18px] text-white font-medium">Total Amount</span>
        <span className="text-[23px] text-white font-medium">
          Rs.{totalAmount}.00
        </span>
      </div>
      <hr className="mt-4 border-t-[2px] border-[#A8A8A8] " />

      {/* Payment Method */}
      <div className="leading-6">
        <h3 className="text-[19px] font-bold text-[#4C4A4A] mt-2">Payment</h3>
        <p className="text-[18px] text-[#4C4A4A]">How would you like to pay?</p>
        {/* Radio Buttons */}
        <div class="flex  flex-col justify-start gap-2 space-y-2 mt-4 ">
          <label class="flex items-center">
            <input type="radio" name="option" class="hidden peer" />
            <span class="w-4 h-4 border-2 border-gray-700 rounded-[5px] peer-checked:border-gray-400 peer-checked:bg-[#FF4C00] transition duration-200"></span>
            <span class="ml-2 font-bold text-[15px]">Credit or Debit Card</span>
          </label>

          <label class="flex items-center">
            <input type="radio" name="option" class="hidden peer" />
            <span class="w-4 h-4 border-2 border-gray-700 rounded-[5px] peer-checked:border-gray-400 peer-checked:bg-[#FF4C00] transition duration-200"></span>
            <span class="ml-2 font-bold text-[15px]">Cash on delivery</span>
          </label>
        </div>
      </div>

      {/* Place Order Button */}
      <div onClick={() => navigate("/paymentsuccess")}>
        <button className="  text-white text-[18px] mt-3 w-[368px] h-[58px] px-6 py-3 font-medium bg-[#FF4C00] hover:bg-orange-600 rounded-[8px] flex items-center justify-center">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Payment;
