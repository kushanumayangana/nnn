import React, { useState } from "react";
import CartItem from "./FoodCard";
import { FaStar, FaChevronDown } from "react-icons/fa";

const SearchBar = ({ sItem = [] }) => {
  // Default to an empty array if sItem is undefined
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilterItems] = useState(sItem);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filtered = sItem.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterItems(filtered);
  };

  return (
    <div className="w-full">
      <div className="mx-2">
        <input
          placeholder="Search for food items..."
          value={searchItem}
          onChange={handleInputChange}
          className="w-full p-[6px] my-3 bg-transparent sm:border-[3px] border-[2px] border-black rounded-lg outline-none appearance-none sm:p-2"
        />

        {/* Dropdown menus */}
        <div className="flex space-x-2">
          <button className="flex items-center p-2 mb-2 bg-gray-300 rounded-full">
            <div className="flex items-center space-x-1">
              <span>Over 4.5</span>
              <FaStar />
              <span>|</span>
              <FaChevronDown />
            </div>
          </button>
          <button className="flex items-center p-2 mb-2 bg-gray-300 rounded-full">
            <div className="flex items-center space-x-1">
              <span>Price</span>
              <span>|</span>
              <FaChevronDown />
            </div>
          </button>
          <button className="flex items-center p-2 mb-2 bg-gray-300 rounded-full">
            <div className="flex items-center space-x-1">
              <span>Offers</span>
              <span>|</span>
              <FaChevronDown />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Categories headline */}
      <div className="flex flex-col leading-5">
        <span className="text-black text-[20px] ml-2 font-bold">
          Menu Categories
        </span>
        <span className="text-black font-semibold text-[14px] ml-2">
          Select your favorites!
        </span>
      </div>

      {/* Filtered food items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((food) => (
          <CartItem key={food.id} item={food} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
