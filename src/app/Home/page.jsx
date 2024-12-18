import React, { useState } from "react";
import FeaturedItems from "../components/Home/FeaturedItems";
import PromoBanner from "../components/Home/PromoBanner";
import SearchBar from "../components/Home/SearchBar";
import Checkout from "../Checkout/page";
import SideBar from "../components/common/SideBar";
// import { foodData } from "../../models/FoodItem";
import { fetchFoodData } from "../../services/foodService";
import FavoriteItems from "../components/Home/FavoriteItems";

const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="hidden col-span-1 sm:grid">
          <SideBar />
        </div>
        <div className="grid col-span-9">
          <PromoBanner />
          <SearchBar
            sItem={fetchFoodData}
            category={category}
            setCategory={setCategory}
          />
          <FavoriteItems />
          <FeaturedItems category={category} />
        </div>
        <div className="hidden col-span-2 sm:grid">
          <div>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
