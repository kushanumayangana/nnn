import React, { useState } from "react";
import CartItem from "../Cart/CartItem";
import Menu from "../Menu/Menu";
import RatingsDroupDown from "./RatingsDroupDown";
import PriceDroupDown from '../../components/searchBar/PriceDroupDown'
import OffersDroupDown from '../../components/searchBar/OffersDroupDown'

const SearchBar = ({ sItem }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilterItems] = useState(sItem);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = sItem.filter((sItem) =>
      sItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterItems(filteredItems);
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
        <div className="flex gap-3 mb-2">
        <RatingsDroupDown />
        <PriceDroupDown />
        <OffersDroupDown />
        </div>
        <Menu />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((food, index) => (
          <CartItem key={food.id} item={food} />
        ))}
      </div>
      
    </div>
  );
};

export default SearchBar;
