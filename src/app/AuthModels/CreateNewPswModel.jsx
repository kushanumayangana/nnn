import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const CreateNewPswModel = ({ isOpen, onClose }) => {
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
          <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center">Create New Password</p>
          <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] "> Please create a new password</p>
          <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] mt-[-5px]">following the guidelines below</p>
  
          <div className="mt-[30px] 2xl:mt-[40px] mb-[30px]">
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">1.Enter and confirm your new password </p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">to complete the account verification.</p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242]">2.Your password must include.</p>
          <div>
            <ul className="ml-10 list-disc">
                <li class="marker:text-[#535353]"><p className="2xl:text-[14px] text-[12px] font-semibold text-[#424242]">At least 8 characters.</p></li>
                <li class="marker:text-[#535353]"><p className="2xl:text-[14px] text-[12px] font-semibold text-[#424242]">At least one uppercase letter.</p></li>
                <li class="marker:text-[#535353]"><p className="2xl:text-[14px] text-[12px] font-semibold text-[#424242]">At least one number.</p></li>
                <li class="marker:text-[#535353]"><p className="2xl:text-[14px] text-[12px] font-semibold text-[#424242]">At least one special character.</p></li>
            </ul>
          </div>
         </div>
            
        <form method="POST">
            <input type="password" name="password" placeholder="New Password" className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border"></input>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border"></input>
            <button value="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-5 mb-4 text-[18px] font-semibold rounded-[10px] justify-center items-center">Log in</button>
        </form>
          
        </div>
      </div>
    </div>
  );
};

export default CreateNewPswModel;
