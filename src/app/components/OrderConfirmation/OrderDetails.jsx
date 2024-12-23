import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Order() {
  const orderDetails = {
    orderNumber: 766534,
    DateTime: "07-10-2024 6.39AM",
  };

  const Daddress = ["🏠  Home", "🏢  Office", "📦  Warehouse"];
  const [selectAddress, setSelectAddress] = useState("");

  const handleSelectChange = (e) => {
    setSelectAddress(e.target.value);
  };

  console.log(selectAddress);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="font-bold 2xl:text-[21px] xl:text-[20px] text-2xl text-[#FF4C00]">
        <p>Order Confirmation</p>
      </div>

      {/* Order Details */}
      <div className="leading-6">
        <p className="text-[19px] text-[#565656] font-semibold">
          Order Number <span>{orderDetails.orderNumber}</span>
        </p>
        <p className="text-[18px]  text-[#565656]">
          Date & Time <span>{orderDetails.DateTime}</span>
        </p>
      </div>
      <div>
        <hr className="my-2 border-t-[2px] border-[#A8A8A8]" />
      </div>

      {/* Delivery Address */}
      <div>
        <p className="text-[19px] text-[#565656] font-bold mt-2">
          Delivery Address
        </p>
        <div className="">
          <select
            className="text-white text-[18px] mt-3 w-[368px] h-[58px] px-6 py-3 font-medium bg-[#FF4C00] hover:bg-orange-600 rounded-[8px] flex items-center justify-center "
            value={selectAddress} // Bind state to select
            onChange={handleSelectChange}
          >
            <option  disabled value="">
              <div  className="text-gray-300">
              Select Address

              </div>
             
            </option>
            {Daddress.map((addr, index) => (
              <option key={index} value={addr}>
                {addr}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr className="mt-4 border-t-[2px] border-[#A8A8A8]" />
      <div className="mt-2">
        <span className=" text-[19px] font-bold text-[#565656]">
          Order Summary
        </span>
      </div>
    </div>
  );
}

export default Order;
