import React, { useState } from "react";
import CartItem from "./FoodCard";
import Ratings from "./Ratings";
import Price from "./Price";
import Offers from "./Offers";
import Menu from "../Menu/Menu";

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
          className="w-full p-[6px] my-3  rounded-full outline-none appearance-none sm:p-2 bg-gray-300"
        />

        {/* Dropdown menus */}
        <div className="flex space-x-2">
          <Ratings />
          <Price />
          <Offers />
        </div>
        
        {/* Menu catogery */}
        <div>
          <Menu />
        </div>
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
