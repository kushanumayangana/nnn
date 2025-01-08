import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { TiWarningOutline } from "react-icons/ti";

const MailVerifyModel = ({ isOpen, handleOpenMailVerifyModel,handleSigningMailModel,email }) => {
  const inputRefs = useRef([]);
  const [loading,setLoading] = useState( false );
  const [code, setCode] = useState(Array(6).fill(""));
  const [error,setError] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);


  // prvent bg scrolling
  const openModal = () => {
  document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
  setError("");
  document.body.style.overflow = '';
  };

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleResendEmail = async() =>{
     if (cooldown > 0) return;
    setIsResending(true);
    try {
      const response = await axios.post("http://localhost:3001/api/auth/verifyemail", {email }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to resend email. Please try again.");
      }
      toast.success("Verification code resent successfully!",{autoClose: 1500});
      setCooldown(30); 

    } catch (error) {
      const apiErrorMessage = error.response?.data?.error || "An error occurred while resending the email.";
      toast.error(apiErrorMessage,
        { style:{ color:"red" ,fontFamily: "'Arial', sans-serif"},
        autoClose: 1500 }, );

    } finally {
      setIsResending(false);
    }
  }

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

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
    const updatedCode = [...code];
    pasteData.split("").forEach((char, idx) => {
      if (inputRefs.current[idx]) {
        inputRefs.current[idx].value = char;
        updatedCode[idx] = char;
      }
    });
    setCode(updatedCode);
    inputRefs.current[pasteData.length - 1].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    if (verificationCode.length < 6) {
          setError("Please enter a complete verification code.");
      return;
    }
    if( !email){
      console.log(email)
      setError("go back and enter email");
      return
    }
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/api/auth/verifyemail", {email,code : verificationCode}, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.status !== 200 || response.data.status !== "sucsess") {
        throw new Error(response?.message || "verification failed. Please try again.");
      }
      console.log(response)
      toast.success(response.data?.message || "Email verified successfully!",
        { style: { color: "green", fontFamily: "'Arial', sans-serif" },
          autoClose: 1500,
        });
      
    } catch (error) {
      console.log(error)
      const apiErrorMessage = error.response?.data?.error || "An error occurred. Please try again.";
      toast.error(apiErrorMessage,
        { style:{ color:"red" ,fontFamily: "'Arial', sans-serif"},
        autoClose: 1500 }, );
    }

    finally{
      setLoading(false);
    }
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
            onClick={()=>{handleOpenMailVerifyModel(); handleSigningMailModel(); closeModal()}}
          >
            <IoChevronBackOutline className="mt-2"/>
          </button>
        </div>

        <div className="w-auto m-auto">
          <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center"> Sign in to UniFeast </p>
          <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242]"> Verify with a 4 digit code send to at,</p>
          <p className="text-[17px] 2xl:text-[20px] text-center text-[#FF4C00]">{email}</p>
  
          <div className="mt-3 2xl:mt-5">
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242] hidden xs:block">1.Please check the email you entered for any mistakes</p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242] hidden xs:block">2.If you don’t have an account, please sign up</p>
          <p className="2xl:text-[16px] text-[14px] font-semibold text-[#424242] hidden xs:block">3.Check your spelling and try again.</p>
          </div>
          
          <form method="POST" onSubmit={ handleSubmit }>
              <div className="flex items-center justify-center w-full m-auto my-5 space-x-2 2xl:space-x-4" onPaste={handlePaste}>
                {Array(6)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="2xl:w-[40px] w-[35px] 2xl:h-[50px] h-[45px] border-2 border-[#464444] rounded-[10px] text-[25px] text-center font-bold "
                    />
                  ))}
              </div>

              { error ? 
              <div className="flex ">
              <TiWarningOutline color="#fa2b2b" className="mt-1 mr-2" />
              <p className="text-[12px] font-bold text-[#fa2b2b] mt-1 mb-1">
              { error }
              </p>
              </div> : null }
              
              { loading ? 
              <div>
                <button disabled={true} value="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white 2xl:mb-5 mb-4 xs:text-[16px] text-[13px] font-bold rounded-[10px] justify-center items-center">Processing...</button>
                <img src="/Test/images/loading.gif" className=" w-full h-[4px] justify-center mt-[-8px] mb-[10px]" alt="Loading animation"></img>
              </div>
              
                 :
                 <button value="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-5 mb-4 xs:text-[16px] text-[13px] font-bold rounded-[10px] justify-center items-center">Continue</button> 
              }

          </form>
          
          <button
          onClick={()=>{ handleResendEmail(); }}
          disabled={isResending || cooldown > 0}
          className="bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] 2xl:mb-5 mb-2 text-[18px] font-semibold rounded-[10px]"
          >
            Resend Email
          </button>
          {isResending ? "Resending..." : cooldown > 0 ? `Resend Email (${cooldown}s)` : null }

          <button 
          onClick={ ()=>{handleOpenMailVerifyModel(); handleSigningMailModel(); }}
          className="bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] 2xl:mb-5 mb-2 text-[18px] font-semibold rounded-[10px]"
          >
          Change Email
          </button>
          
        </div>
        <p className="2xl:text-[16px] text-[14px] font-bold hidden xs:block ml-[5px]">Need Help?</p>
      </div>
    </div>
  );
};

export default MailVerifyModel;
