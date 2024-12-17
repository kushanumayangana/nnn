import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import CartItem from "./FoodCard";
import Menu from "../Menu/Menu";

const FeaturedItems = () => {
  const { foodData } = useContext(StoreContext);
  const [category, setCategory] = useState("All");

  return (
    <div>
      <div className="mt-4">
        <div>
          <span className="text-black text-[20px] ml-2 font-bold">
            Featured Foods
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {foodData
            .filter((item) => category === "All" || category === item.category)
            .map((food) => (
              <CartItem key={food.id} item={food} /> // Replacing FoodItem with CartItem
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
