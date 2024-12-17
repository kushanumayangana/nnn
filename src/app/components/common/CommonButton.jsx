import React from "react";

const CommonButton = ({ text, icon, src, onClick, className, iconPosition = "left" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-medium bg-[#FF4C00] hover:bg-orange-600 text-white text-[20px] rounded-[8px] flex items-center justify-center w-[368px] h-[58px] ${className}`}
    >
      {iconPosition === "left" && (
        <>
          {src && <img src={src} alt="icon" className="w-6 h-6 mr-4" />}
        </>
      )}
      {text}
    </button>
  );
};

export default CommonButton;
