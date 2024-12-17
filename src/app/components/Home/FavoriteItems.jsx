import React from "react";
import { foodData } from "../../../models/FoodItem";
import FoodCard from "../Home/FoodCard";

const FavoriteItems = () => {
  // Filter the favorite items
  const favoriteItems = foodData.filter((item) => item.favorite === true);

  return (
    <div>
      {/* Favorite headline */}
      <div className="mt-2 ">
        <span className="text-black text-[20px] ml-2 font-bold">
          Favorite Categories
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {favoriteItems.map((item) => (
          <FoodCard key={item.id} item={item} /> // Pass each favorite item to FoodCard
        ))}
      </div>
    </div>
  );
};

export default FavoriteItems;
