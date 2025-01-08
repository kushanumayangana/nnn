import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import {validateEmail} from "../../util/validator";
import axios from "axios";
import { toast } from "react-toastify";
import { TiWarningOutline } from "react-icons/ti";

const SigninMailModel =({isOpen,handleSigningMailModel,getemail,handleOpenMailVerifyModel})=> {

  const [email,setEmail] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState( false );

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/google";
  };
  const handlefacebookLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/facebook";
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const validationResult = validateEmail(value);
    setError(validationResult === "valid" ? "" : validationResult);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) return;
    if (validateEmail(email) === "valid") {
      getemail(email); 
      setLoading(true);

      try {
        const response = await axios.post("http://localhost:3001/api/auth/getverificationcode", {email}, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200 || response.data.status !== "sucsess") {
          throw new Error(response?.message || "Failed to send mail. Please try again.");
        }
        handleSigningMailModel();
        handleOpenMailVerifyModel();

      } catch (error) {
        const apiErrorMessage = error.response?.data?.error || "An error occurred. Please try again.";
        toast.error(apiErrorMessage,{ style:{ color:"red" ,fontFamily: "'Arial', sans-serif"}, autoClose: 1500 }, );
        
      } finally {
        setLoading(false);
      }

    } else {
      setError("Please enter a valid email address.");
    }
  };

  const openModal = () => {
      document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
      setEmail(""); 
      setError("");
      handleSigningMailModel();
      document.body.style.overflow = '';
    };

    if (!isOpen) return null;
    openModal();
    return(
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="relative flex flex-col px-[22px] py-2 bg-white rounded-lg shadow-lg w-[90%] xs:max-w-[400px] 2xl:max-w-[500px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between">
                      <button
                        className="text-2xl text-gray-500 2xl:text-4xl hover:text-black ml-[-15px]"
                        onClick={()=>{handleSigningMailModel();closeModal()}}
                      >
                        <IoClose className="mt-2"/>
                      </button>
                    </div>
            
                    <div className="w-full">
                      <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center">Sign Up to UniFeast</p>
                      <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] "> What's your email?</p>
                      
                    <form onSubmit={ handleSubmit }>  
                        <input
                         onChange={ handleInputChange }
                         type="email" 
                         name="email" 
                         placeholder="Enter Your Email" 
                         className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border mt-1"
                         />
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

                    <div class="flex items-center mb-3">
                        <div class="flex-grow border-t border-gray-500"></div>
                        <span class="mx-4 text-gray-500 text-sm">or</span>
                        <div class="flex-grow border-t border-gray-500"></div>
                    </div>

                    <div className="flex flex-col items-center w-full mb-4 space-y-3 sm:px-0">
                        <button 
                        onClick={()=>{handleGoogleLogin();}}
                        className=" flex items-center bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] text-[13px] sm:text-[16px] font-semibold rounded-[10px]  py-3 px-4">
                          <FcGoogle className="text-2xl" />
                          <span className="p-4">
                            Continue with Google
                          </span>
                        </button>

                        <button 
                        onClick={()=>{handlefacebookLogin();}}
                        className=" flex items-center bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] text-[13px] sm:text-[16px] font-semibold rounded-[10px]  py-3 px-4 ">
                          <FaFacebook className="text-2xl text-blue-600" />
                          <span className="p-4 text-black">
                            Continue with Facebook
                          </span>
                        </button>
                    </div>
                      
                    </div>
                  </div>
            </div>
        </>

    );

    
};

export default SigninMailModel;