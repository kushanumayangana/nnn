import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";

const Signin = ({ handleSignIn, handleLoginPopup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nic: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    // Last Name validation
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    // Email validation
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    // NIC validation (Sri Lankan format: 9 digits + V/v or 12 digits)
    if (!formData.nic) newErrors.nic = "NIC number is required";
    else if (!/^\d{9}[vV]$|^\d{12}$/.test(formData.nic))
      newErrors.nic = "NIC must be 9 digits + 'V' or 12 digits";

    // Password validation
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    // Checkbox validation
    if (!isChecked) newErrors.terms = "You must agree to the Terms of Services";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully", formData);
      // Add API call here to send formData to backend for verification
    }
  };



    // prvent bg scrolling
    const openModal = () => {
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      document.body.style.overflow = "";
    };


  
    // if (!isOpen) return null;
    // openModal();

  return (
      <div className="fixed inset-0 flex items-center justify-center ">
        <div
          className="relative flex flex-col px-[22px] py-2 bg-white rounded-lg shadow-lg lg:w-[350px] xs:max-w-[400px] 2xl:max-w-[500px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <button
              className="text-2xl text-gray-500 2xl:text-4xl hover:text-black ml-[-15px]"
              onClick={() => {
                handleLoginPopup();
                closeModal();
              }}
            >
              <IoChevronBackOutline className="mt-2" />
            </button>
          </div>

          <div className="w-auto m-auto">
            <p className="2xl:text-[25px] text-[23px] 2xl:mb-3 mb-2 font-bold text-center">
              Sign Up to UniFeast
            </p>
            <p className="text-[17x] 2xl:text-[20px] font-bold text-[#424242] ">
              What's your phone number or email?{" "}
            </p>
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            {/* First Name */}
            <div className="mb-3 2xl:mb-3">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Namer"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black  text-[15px] font-bold rounded-[10px] pl-2 border"
              />
              {errors.firstName && (
                <p className="mb-0 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div  className="mb-3 2xl:mb-3">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black text-[15px] font-bold rounded-[10px] pl-2 border"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div  className="mb-3 2xl:mb-3">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black text-[15px] font-bold rounded-[10px] pl-2 border"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* NIC */}
            <div  className="mb-3 2xl:mb-3">
              <input
                id="nic"
                name="nic"
                type="text"
                placeholder="NIC Number"

                value={formData.nic}
                onChange={handleChange}
                className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black text-[15px] font-bold rounded-[10px] pl-2 border"
              />
              {errors.nic && (
                <p className="text-sm text-red-500">{errors.nic}</p>
              )}
            </div>

            {/* Password */}
            <div  className="mb-3 2xl:mb-3">
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"

                  value={formData.password}
                  onChange={handleChange}
                  className="w-full 2xl:h-[56px] h-[45px] border-1 border-black text-black text-[15px] font-bold rounded-[10px] pl-2 border pr-8"
                />
                {showPassword ? (
                  <FaEye
                    className="absolute text-black -translate-y-1/2 cursor-pointer top-1/2 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute text-black -translate-y-1/2 cursor-pointer top-1/2 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-7 h-7 border-gray-300 rounded focus:ring-blue-500 mb-[16px]"
              />
              <label htmlFor="terms" className="2xl:text-[16px] text-[14px] text-black cursor-pointer mt-[1px] mb-0">
                Yes, I understand and agree to the UniFeast{" "}
                <a href="#" className="text-black">
                  Terms of Services
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="mb-4 text-sm text-red-500">{errors.terms}</p>
            )}

            {/* Submit Button */}
            <button type="submit" className="bg-[#FA412D] w-full 2xl:h-[56px] h-[45px] text-white hover:bg-[#FF4C00] 2xl:mb-0 mb-0 text-[16px] font-semibold rounded-[10px] justify-center items-center mt-2">
              Create Account
            </button>
          </form>

          <p
            className="my-3 text-sm text-center cursor-pointer text-gray hover:text-black-100 text-shadow"
            onClick={handleSignIn}
          >
            Already have an Account? Log in
          </p>
        </div>
      </div>
  );
};

export default Signin;
