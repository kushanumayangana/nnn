import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
      <footer class="bg-black w-full  h-auto flex justify-between flex-col lg:flex-row pb-8 pr-4 lg:pr-0 mt-12 ">
      <div class="w-auto h-auto m-2 flex flex-col lg:flex-row space-x-6 pl-8">
        <div className='mt-3 text-center lg:text-left '>
          <p className='text-[20px] text-white font-bold'>Popular Catogories</p>
          <div className='w-auto ml-[15px] mt-2 border-b-2 border-white lg:border-0 pb-2 sm:pb-0'>
            <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Appetisers</p>
            <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Main Course</p>
            <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Desserts</p>
            <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Beverages</p>
          </div>
        
        </div>
        
        <div className='pb-2 mt-3 text-center border-b-2 border-white lg:text-left lg:border-0 sm:pb-0'>
          <p className='text-[20px] text-white font-bold '>Get to Know Us</p>
          <div className='w-auto ml-[15px] mt-2'>
            <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400' >About Us</p>
            <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400' >Our Story</p>
          </div>
        </div>

        <div className='pb-2 mt-3 text-center border-b-2 border-white lg:text-left lg:border-0 sm:pb-0'>
          <p className='text-[20px] text-white font-bold '>Quick Links</p>
            <div className='w-auto ml-[15px] mt-2'>
              <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400' >Home</p>
              <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400' >Offers & Discounts</p>
              <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400' >Account</p>
            </div>
        </div>

        <div className='pb-2 mt-3 text-center border-b-2 border-white lg:text-left lg:border-0 sm:pb-0'>
          <p className='text-[20px] text-white font-bold '>Customer Support</p>
            <div className='w-auto ml-[15px] mt-2'>
              <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Help Center</p>
              <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Contact Us</p>
            </div>
          </div>
      </div>

      <div className='w-auto h-auto min-w-[300px] sm:float-right ml-2 sm:ml-0  px-12'>
        <div className='mt-3 ml-5 text-center sm:ml-0 '>
              <p className='text-[20px] text-white  font-bold'>Powered by</p>
              <p className='text-[18px] text-white font-semibold '>Uva Wellassa University of Sri Lanka</p>
              <p className='text-[18px] text-white font-semibold '>Faculty of Technological Studies</p>
              <p className='text-[14px] text-white font-normal '>Department of Information and Communication</p>
              <p className='text-[14px] text-white font-normal '>Technology</p>
              <p className='text-[16px] text-white font-normal cursor-pointer hover:text-gray-400'>Privacy Policy | Terms and Conditions</p>
        </div>
      </div>
      

    </footer>

  );
};

export default Footer;