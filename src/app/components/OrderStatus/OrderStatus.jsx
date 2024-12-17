import React from "react";
import Button from "../common/CommonButton";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex justify-center">
        <img
          src="Test/OrderStatus/OrderStatus.png"
          alt="Payment Success"
          className="w-[497px] h-[364px] mb-6"
        />
      </div>

      <div className="flex flex-col items-center gap-[0px] w-[368px]">
        <p className="text-[27px] font-extrabold text-black">Order Status</p>
        <p className="mt-0 text-center text-[#949494] text-[20px] font-semibold">
          Track your order status in real time updates
        </p>
        <div className="flex flex-col gap-4 mt-6 ml-[-10px]">
          <div className="space-y-6">
            {/* Order Received */}
            <div className="flex items-start">
              <div className="bg-[#FF4C00] w-[54px] h-[54px] rounded-[30px] p-3">
                <img
                  src="/Test/OrderStatus/Hand.png"
                  alt="Order Received"
                  className="w-[33px] h-[26px] mr-4  rounded-[30px]"
                />
              </div>

              <div className="ml-3 ">
                <h4 className="font-semibold text-[22px] text-black">
                  Order Received
                </h4>
                <img src="/Test/OrderStatus/alarm.png" />
                <p className="text-[18px] text-[#6E6E6E] font-medium">
                  9.10 AM, 9 May 2024
                </p>
              </div>
            </div>

            {/* On the Way */}
            <div className="flex items-start">
              <div className="bg-[#FF4C00] w-[54px] h-[54px] rounded-[30px] p-3">
                <img
                  src="/Test/OrderStatus/drone.png"
                  alt="Order Received"
                  className="w-[33px] h-[26px] mr-4  rounded-[30px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-[22px] text-black">
                  On the Way
                </h4>
                <img src="/Test/OrderStatus/alarm.png" />
                <p className="text-[18px] text-[#6E6E6E] font-medium">
                  9.15 AM, 9 May 2024{" "}
                </p>
                <div>
                  <span className="text-white bg-[#FF4C00] rounded-[82px] w-[107px] h-[30px]">
                    {" "}
                    <img src="/Test/OrderStatus/podcast.png" /> Tracking
                  </span>
                </div>
              </div>
            </div>

            {/* Delivered */}
            <div className="flex items-start">
              <div className="bg-[#FF4C00] w-[54px] h-[54px] rounded-[30px] p-3">
                <img
                  src="/Test/OrderStatus/Hand2.png"
                  alt="Order Received"
                  className="w-[33px] h-[26px] mr-4  rounded-[30px]"
                />
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-[22px] text-black">
                  Delivered
                </h4>
                <img src="/Test/OrderStatus/alarm.png" />{" "}
                <p className="text-[18px] text-[#6E6E6E] font-medium">
                  Finish time in 3 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
