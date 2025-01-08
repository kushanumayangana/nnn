import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import {validateEmail,validatePassword} from "../../util/validator";
import axios from "axios";
import { toast } from "react-toastify";
import { TiWarningOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";



const LoginModel =({isOpen,handleLoginModel})=> {

    const [formData,setFormData] = useState({ email:"", password:"" });
    const [errors,setErrors] = useState({ email:"", password:"" });
    const [loading,setLoading] = useState( false );
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
      window.location.href = "http://localhost:3001/api/auth/google";
    };
    const handlefacebookLogin = () => {
      window.location.href = "http://localhost:3001/api/auth/facebook";
    };

    const handlechange = (e) =>{
      const { name, value } = e.target;
      setFormData({ ...formData,[name]: value });
      let error = "";
      if (name === "email") error = validateEmail(value);
      if (name === "password") error = validatePassword(value);

      setErrors({
        ...errors,
        [name]: error === "valid" ? "" : error,
      });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateEmail(formData.email) !== "valid" || validatePassword(formData.password)!== "valid") {
          setErrors({
            email: validateEmail(formData.email) !== "valid" ? validateEmail(formData.email) : "" ,
            password: validatePassword(formData.password) !== "valid" ? validatePassword(formData.password) : "",
          });
          return;
        }
        setLoading(true);

        try {
          const response = await axios.post("http://localhost:3001/api/auth/signin", formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const tokenData = await response.data.data;

          if (response.status !== 200 || response.data.status !== "sucsess") {
            throw new Error(tokenData.message || "Login failed. Please try again.");
          }
          
          toast.success("Login successful!",{autoClose: 1500});

          localStorage.setItem("accessToken", tokenData.accessToken);
          localStorage.setItem("refreshToken", tokenData.refreshToken);
          
          setFormData("");
          handleLoginModel();
          navigate("/");
        } catch (error) {
          const apiErrorMessage = error.response?.data?.error || "An error occurred. Please try again.";
          toast.error(apiErrorMessage,{ style:{ color:"red" ,fontFamily: "'Arial', sans-serif"}, autoClose: 1500 }, );

        } finally {
          setLoading(false);
        }
    };

    const openModal = () => {
        document.body.style.overflow = 'hidden';
      };
      const closeModal = () => {
        document.body.style.overflow = '';
      };
      if (!isOpen) return null;
      openModal();
     
    return(

      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={ `relative flex flex-col px-5 py-3 bg-white rounded-lg shadow-lg w-[90%] xs:max-w-[400px] 2xl:max-w-[500px] transform transition-transform  ${
              isOpen ? " scale-100 opacity-100" : "scale-0 opacity-0"
              }` }
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <button
                  className="text-2xl text-gray-500 2xl:text-4xl hover:text-black ml-[-15px]"
                  onClick={()=>{handleLoginModel(); closeModal()}}
                >
                  <IoClose className="mt-2"/>
                </button>
              </div>
              
              <div className="w-full">
                    <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center">Log in to UniFeast</p>
                    <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] mb-2">  What's your email?</p>
                    

                  <form method="POST" onSubmit={ handleSubmit }>
                    
                        <input 
                          onChange={ handlechange }
                          type="email" 
                          value={formData.email}
                          name="email" 
                          placeholder="Enter Your Email" 
                          className={ errors.email ? "w-full 2xl:h-[56px] h-[45px] border-1 text-black   text-[15px] font-bold rounded-[10px] pl-2 border border-red-800 focus:outline-[#fa2b2b]" : "w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black   text-[15px] font-bold rounded-[10px] pl-2 border mb-[15px]" }
                        />
                        { errors.email ? 
                        <div className="flex ">
                        <TiWarningOutline color="#fa2b2b" className="mt-1 mr-2" />
                        <p className="text-[12px] font-bold text-[#fa2b2b] mt-1 mb-1">
                        { errors.email }
                        </p>
                        </div> : null }
                        
                    
                        <input 
                          onChange={ handlechange }
                          type="password" 
                          value={formData.password}
                          name="password" 
                          placeholder="Enter Your Password" 
                          className={ errors.password ? "w-full 2xl:h-[56px] h-[45px] border-1 text-black 2xl:mb-5 mb-1 text-[15px] font-bold rounded-[10px] pl-2 border border-red-800 focus:outline-[#fa2b2b]" :"w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-1 text-[15px] font-bold rounded-[10px] pl-2 border" }
                        />
                        { errors.password ? 
                          <div className="flex ">
                          <TiWarningOutline color="#fa2b2b" className="mr-2" />
                          <p  className="text-[12px] font-bold text-[#fa2b2b] mb-1">
                          { errors.password }
                          </p>
                          </div> : null }
                        
                    

                        <p className="text-[12px] 2xl:text-[15 px] font-semibold mb-2 cursor-pointer">  Forgot password</p>
                        
                        { loading ? 
                          <div>
                            <button disabled={true} value="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white 2xl:mb-5 mb-4 xs:text-[16px] text-[13px] font-bold rounded-[10px] justify-center items-center">Processing...</button>
                            <img src="/Test/images/loading.gif" className=" w-full h-[4px] justify-center mt-[-8px] mb-[10px]" alt="Loading animation"></img>
                          </div>
                          
                             :
                             <button value="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-5 mb-4 xs:text-[16px] text-[13px] font-bold rounded-[10px] justify-center items-center">Continue</button> 
                        }
                        
                        

                        <div class="flex items-center mb-3">
                          <div class="flex-grow border-t border-gray-500"></div>
                          <span class="mx-4 text-gray-500 text-sm">or</span>
                          <div class="flex-grow border-t border-gray-500"></div>
                        </div>
                  </form>

                  <div className="flex flex-col items-center w-full space-y-3 sm:px-0">
                        <button 
                        onClick={()=>{handleGoogleLogin();}}
                        className=" flex items-center bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] text-[13px] font-semibold rounded-[10px]  py-3 px-4 xs:text-[16px]">
                          <FcGoogle className="text-2xl" />
                          <span className="p-4">
                            Continue with Google
                          </span>
                        </button>

                        <button 
                        onClick={()=>{handlefacebookLogin();}}
                        className=" flex items-center bg-[#D9D9D9] w-full 2xl:h-[56px] h-[45px] hover:bg-[#888686] text-[13px] font-semibold rounded-[10px]  py-3 px-4 xs:text-[16px]">
                          <FaFacebook className="text-2xl text-blue-600" />
                          <span className="p-4 text-black">
                            Continue with Facebook
                          </span>
                        </button>
                  </div>
                  <p
                    className="my-3 mb-4 text-[12px] text-left font-semibold cursor-pointer text-gray hover:text-black-100 text-shadow"
                  >
                    No Account? Create here
                 </p>

              </div>
          </div>
      </div>
    );

    
};

export default LoginModel;