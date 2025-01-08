import React, { useRef } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const ResetPswCodeModel = ({ isOpen, handlResetPswCodeModel }) => {
  const user = { mail: "isharawanninayaka26@gmail.com" };
  const inputRefs = useRef([]);
  // prvent bg scrolling
  const openModal = () => {
  document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
  document.body.style.overflow = '';
  };


  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, inputRefs.current.length);
    pasteData.split("").forEach((char, idx) => {
      if (inputRefs.current[idx]) {
        inputRefs.current[idx].value = char;
      }
    });
    inputRefs.current[pasteData.length - 1].focus();
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
            onClick={()=>{handlResetPswCodeModel(); closeModal()}}
          >
            <IoChevronBackOutline className="mt-2"/>
          </button>
        </div>

        <div className="w-auto m-auto">
          <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center"> Email Found! </p>
          <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242]"> Verify with a 4 digit code and set</p>
          <p  className="text-[17px] 2xl:text-[20px] font-bold text-[#424242] -mt-2">a new password to log in</p>
          <p  className="text-[23px] 2xl:text-[30px] font-bold text-[#424242] text-center mt-1 2xl:mt-5 2xl:mb-0 mb-[-10px]">Your email</p>
          <p className="text-[17px] 2xl:text-[20px] text-center">{user.mail}</p>

          <div className="mt-3 2xl:mt-5">
          <p className="2xl:text-[16px] text-[14px] font-bold text-[#424242] hidden xs:block">1.Please check the email you entered for any mistakes</p>
          <p className="2xl:text-[16px] text-[14px] font-bold text-[#424242] hidden xs:block">2.If you don’t have an account, please sign up</p>
          <p className="2xl:text-[16px] text-[14px] font-bold text-[#424242] hidden xs:block">3.Check your spelling and try again.</p>
          </div>
            
          <div className="flex items-center justify-center w-full m-auto my-5 space-x-2 2xl:space-x-4" onPaste={handlePaste}>
            {Array(6)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  ma2xlength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="2xl:w-[40px] w-[35px] 2xl:h-[50px] h-[45px] border-2 2xl:border-2 border-[#464444] rounded-[10px] text-[25px] text-center font-bold "
                />
              ))}
          </div>
          <button className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-5 mb-2 text-[18px] font-semibold rounded-[10px]">Continue</button>
          <button className="bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] 2xl:mb-5 mb-2 text-[18px] font-semibold rounded-[10px]">Resend Email</button>
          <button className="bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] 2xl:mb-5 mb-2 text-[18px] font-semibold rounded-[10px]">Change Email</button>
          
        </div>
        <p className="2xl:text-[16px] text-[14px] font-bold hidden xs:block ml-[5px]">Need Help?</p>
      </div>
    </div>
  );
};

export default ResetPswCodeModel;
