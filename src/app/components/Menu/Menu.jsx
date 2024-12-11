import React from 'react';

const Menu = ({ setCategory }) => {
  return (
    <div className="flex items-center gap-6 p-2 sm:pl-5 sm:gap-14">
      {/* Pizza */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setCategory('Pizza')}
      >
      
        <img src="Test/assets/menu/pizza.png" alt="Pizza" />
        <span>Pizza</span>
      </div>

      {/* Burger */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setCategory('Burger')}
      >
        
        <img src="Test/assets/menu/burger.png" alt="Burger" />
        <span>Burger</span>
      </div>

      {/* Fried Rice */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setCategory('Fried Rice')}
      >
        
        <img src="Test/assets/menu/fried-rice.png" alt="Fried Rice" />
        <span>Fried Rice</span>
      </div>

      {/* Noodles */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setCategory('Noodles')}
      >
        
        <img src="Test/assets/menu/noodles.png" alt="Noodles" />
        <span>Noodles</span>
      </div>

      {/* Donuts */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setCategory('Donuts')}
      >
        
        <img src="Test/assets/menu/donut.png" alt="Donuts" />
        <span>Donuts</span>
      </div>
    </div>
  );
};

export default Menu;
