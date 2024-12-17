import React from "react";
import Button from "../common/CommonButton";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">

      <div className="flex justify-center">
        <img
          src="Test/Payment/PaymentSuccsessfull.png"
          alt="Payment Success"
          className="w-[497px] h-[364px] mb-6"
        />
      </div>

      <div className="flex flex-col items-center gap-[5px] w-[368px]">
        <p className="text-[27px] font-extrabold text-black">
          Payment Successful!
        </p>
        <p className="mt-2 text-center text-[#949494] text-[20px]">
          Your payment was successful, and your order is being processed.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <Button
            text="Order Status"
            src="Test/Payment/quality-badge.png"
            onClick={() => console.log("Order Status Clicked")}
          />
          <Button
            text="Back to Home"
            src="Test/Payment/angle-circle.png"
            onClick={() => console.log("Back to Home Clicked")}
          />
        </div>
      </div>
      
    </div>
  );
};

export default PaymentSuccess;
