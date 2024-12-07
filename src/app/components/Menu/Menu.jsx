import React from 'react'
import Pizza from '../../assets/menu/pizza.png'
import Burger from '../../assets/menu/burger.png'
import FriedRice from '../../assets/menu/fried-rice.png'
import Noodles from '../../assets/menu/noodles.png'
import Dounats from '../../assets/menu/donut.png'

const Menu = () => {
  return (
    <div>
      <div className='flex items-center gap-6 p-2 sm:pl-5 sm:gap-14'>
        {/* Pizza */}
        <div clasname="flex items-center justify-center">
          <img src={Pizza} alt="" />
          <span>Pizza</span>  
        </div>
        
        {/* Burger */}
        <div clasname="flex items-center justify-center">
          <img src={Burger} alt="" />
          <span>Burger</span>
        </div>
        
        {/* Fried Rice */}
        <div clasname="flex items-center justify-center">
          <img src={FriedRice} alt="" />
          <span>Fried Rice</span>
        </div>

        {/* Noodles */}
        <div clasname="flex items-center justify-center">
          <img src={Noodles} alt="" />
          <span>Noodles</span>
        </div>

        {/* Donuts */}
        <div clasname="flex items-center justify-center">
          <img src={Dounats} alt="" />
          <span>Donuts</span>
        </div>
      </div>
    </div>
  )
}

export default Menu
