import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { foodOffers } from '../../testData/OffersData';

const OffersDroupDown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handelOptionClick =() => {
    setIsOpen(false);
  }
  
  return (
    <div>
      <button onClick={()=> setIsOpen ((prev) => (!prev))}> 
        <div className='flex items-center justify-center px-3 py-2 space-x-1 bg-gray-300 rounded-full'>
            <span>Offers</span>
            {
              !isOpen ? <FaAngleDown /> : <FaAngleUp />
            }
        </div>
      </button>
      {isOpen && (
        // Offers Main dev container
        <div className='absolute bg-gray-200 w-[200px] mt-1 rounded-md p-2'>
          {/* Offer 01 */}
          <div className=''>
            {foodOffers.map((item)=>{
              return(
                <div key={item.id} >
            <img className='mt-1 rounded-md' src={item.image} alt="" />
            <h4 className='font-bold text-[15px]'>{item.title} </h4>
            <h3 className='text-[13px]'>{item.description}</h3>
            <button onClick={handelOptionClick} className='text-[12px] bg-gray-600 text-white px-4 py-1 rounded-full'>see more</button>
            </div>
              )
            })}
            
          </div>
        </div>
      )}
    </div>
  )
}

export default OffersDroupDown;
