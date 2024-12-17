import React from "react";

const Menu = ({ setCategory }) => {
  return (
    <div>
      {/* Menu Categories headline */}
      <div className="flex flex-col mt-2 leading-5">
        <span className="text-black text-[20px] ml-2 font-bold">
          Menu Categories
        </span>
        <span className="text-black font-semibold text-[14px] ml-2">
          Select your favorites!
        </span>
      </div>

      <div className="flex items-center gap-6 p-2 sm:pl-5 sm:gap-14 ">
        {/* Pizza */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setCategory("Pizza")}
        >
          <img className="w-auto h-[35px]" src="Test/assets/menu/pizza.png" alt="Pizza" />
          <span className="text-[14px]">Pizza</span>
        </div>

        {/* Burger */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setCategory("Burger")}
        >
          <img className="w-auto h-[35px]" src="Test/assets/menu/burger.png" alt="Burger" />
          <span className="text-[14px]">Burger</span>
        </div>

        {/* Fried Rice */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setCategory("Fried Rice")}
        >
          <img className="w-auto h-[35px]" src="Test/assets/menu/fried-rice.png" alt="Fried Rice" />
          <span className="text-[14px]">Fried Rice</span>
        </div>

        {/* Noodles */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setCategory("Noodles")}
        >
          <img className="w-auto h-[35px]" src="Test/assets/menu/noodles.png" alt="Noodles" />
          <span className="text-[14px]">Noodles</span>
        </div>

        {/* Donuts */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => setCategory("Donuts")}
        >
          <img className="w-auto h-[35px]" src="Test/assets/menu/donut.png" alt="Donuts" />
          <span className="text-[14px]">Donuts</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
