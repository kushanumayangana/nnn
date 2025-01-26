// import React, { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import { validateName } from "../../util/validator";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { TiWarningOutline } from "react-icons/ti";

// const SigningFormModel = ({
//   isOpen,
//   handleSigningFormModel,
//   handleOpenMailVerifyModel,
// }) => {
//   const [formData,setFormData] = useState({ fname:"", lname:"",nic:"",password:"" });
//   const [errors,setErrors] = useState({ fname:"", lname:"",nic:"",password:"" });
//   const [loading, setLoading] = useState(false);
//   const [isChecked, setIsChecked] = useState(false); 


//   const handleClick = () => {
//     setIsChecked(!isChecked);
//   };

//   //   const handleGoogleLogin = () => {
//   //     window.location.href = "http://localhost:3001/api/auth/google";
//   //   };
//   //   const handlefacebookLogin = () => {
//   //     window.location.href = "http://localhost:3001/api/auth/facebook";
//   //   };

//   const handleInputChange = (e) => {
//     const {name ,value } = e.target.value;
//     setFormData({ ...formData,[name]: value });
//           let error = "";
//           if (name === "fname") error = validateName(value);
//           if (name === "lname") error = validateName(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (error) return;
//     if (validateEmail(email) === "valid") {
//       //   getemail(email);
//       setLoading(true);

//       try {
//         const response = await axios.post(
//           "http://localhost:3001/api/auth/getverificationcode",
//           { email },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (response.status !== 200 || response.data.status !== "sucsess") {
//           throw new Error(
//             response?.message || "Failed to send mail. Please try again."
//           );
//         }
//         handleSigningFormModel();
//         handleOpenMailVerifyModel();
//       } catch (error) {
//         const apiErrorMessage =
//           error.response?.data?.error || "An error occurred. Please try again.";
//         toast.error(apiErrorMessage, {
//           style: { color: "red", fontFamily: "'Arial', sans-serif" },
//           autoClose: 1500,
//         });
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setError("Please enter a valid email address.");
//     }
//   };

//   const openModal = () => {
//     document.body.style.overflow = "hidden";
//   };
//   const closeModal = () => {
//     setEmail("");
//     setError("");
//     handleSigningFormModel();
//     document.body.style.overflow = "";
//   };

//   if (!isOpen) return null;
//   openModal();
//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div
//           className="relative flex flex-col px-[22px] py-2 bg-white rounded-lg shadow-lg w-[90%] xs:max-w-[400px] 2xl:max-w-[500px]"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex items-center justify-between">
//             <button
//               className="text-2xl text-gray-500 2xl:text-4xl hover:text-black ml-[-15px]"
//               onClick={() => {
//                 handleSigningFormModel();
//                 closeModal();
//               }}
//             >
//               <IoClose className="mt-2" />
//             </button>
//           </div>

//           <div className="w-full">
//             <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center">
//               Sign Up to UniFeast
//             </p>
//             <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] ">
//               What's your phone number or email?
//             </p>

//             <form onSubmit={handleSubmit}>
//               <input
//                 onChange={handleInputChange}
//                 type="text"
//                 name="fname"
//                 placeholder="Fist Name"
//                 className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border mt-1"
//               />

//               <input
//                 onChange={handleInputChange}
//                 type="text"
//                 name="lname"
//                 placeholder="Last Name"
//                 className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border mt-1"
//               />

//               <input
//                 onChange={handleInputChange}
//                 type="number"
//                 name="nic"
//                 placeholder="NIC Number"
//                 className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border mt-1"
//               />

//               <input
//                 onChange={handleInputChange}
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black 2xl:mb-5 mb-4 text-[15px] font-bold rounded-[10px] pl-2 border mt-1"
//               />

//               <label className="flex mb-6">
//                 <input
//                   type="checkbox"
//                   name="option"
//                   className="hidden peer"
//                   checked={isChecked}
//                 onChange={handleClick}                
//                 />
//                 <span
//                  className={`mt-[2px] w-4 h-4 border-2 border-gray-700 rounded-[5px] transition duration-200 ${
//                   isChecked ? "bg-[#FF4C00]" : "bg-white"
//                   }`}
                  
//                 ></span>
//                 <span className="ml-2 font-bold text-[15px]">
//                   Yes, I understand and agree to the UniFeast Terms of Service
//                 </span>
//               </label>

//               {error ? (
//                 <div className="flex ">
//                   <TiWarningOutline color="#fa2b2b" className="mt-1 mr-2" />
//                   <p className="text-[12px] font-bold text-[#fa2b2b] mt-1 mb-1">
//                     {error}
//                   </p>
//                 </div>
//               ) : null}

//               {loading ? (
//                 <div>
//                   <button
//                     disabled={true}
//                     value="submit"
//                     className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white 2xl:mb-5 mb-4 xs:text-[16px] text-[13px] font-bold rounded-[10px] justify-center items-center"
//                   >
//                     Processing...
//                   </button>
//                   <img
//                     src="/Test/images/loading.gif"
//                     className=" w-full h-[4px] justify-center mt-[-8px] mb-[10px]"
//                     alt="Loading animation"
//                   ></img>
//                 </div>
//               ) : (
//                 <button
//                   value="submit"
//                   className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-5 mb-4 xs:text-[16px] text-[13px] font-bold rounded-[10px] justify-center items-center"
//                 >
//                   Create My Account
//                 </button>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SigningFormModel;
