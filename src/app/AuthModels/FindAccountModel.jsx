import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const FindAccountModel = ({ isOpen, onClose }) => {
  // prvent bg scrolling
  const openModal = () => {
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    document.body.style.overflow = '';
  };

  if (!isOpen) return null;
  openModal();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative flex flex-col px-[22px] py-2 bg-white rounded-lg shadow-lg w-[90%] xs:max-w-[400px] 2xl:max-w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <button
            className="text-2xl text-gray-500 2xl:text-4xl hover:text-black ml-[-15px]"
            onClick={()=>{onClose();closeModal()}}
          >
            <IoChevronBackOutline className="mt-2"/>
          </button>
        </div>

        <div className="w-auto m-auto">
          <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center">Find Your Account </p>
          <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] "> If you forgotten your password,</p>
          <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] mt-[-5px]">please follow these steps</p>
  
          <div className="mt-[30px] 2xl:mt-[40px] mb-[30px]">
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">1.Find your UniFeast account using your email or phone.</p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">2.Get a 4-digit code sent to your email or phone.</p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">3.Enter the 4-digit code to verify</p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">4.Create a new password and log in.</p>
          </div>
            
        <form method="POST">
            <input type="email" name="email" placeholder="Enter Your Email" className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border"></input>
            <button value="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-5 mb-4 text-[18px] font-semibold rounded-[10px] justify-center items-center">Search Again</button>
        </form>
          
        </div>
      </div>
    </div>
  );
};

export default FindAccountModel;
