import React, { useState } from "react";
import FeaturedItems from "../components/Home/FeaturedItems";
import PromoBanner from "../components/Home/PromoBanner";
import SearchBar from "../components/Home/SearchBar";
import Checkout from "../Checkout/page";
import SideBar from "../components/common/SideBar";
import { foodData } from "../../models/FoodItem";
import FavoriteItems from "../components/Home/FavoriteItems";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="grid col-span-1">
          <SideBar />
        </div>
        <div className="grid col-span-9">
          <PromoBanner />
          <SearchBar sItem={foodData} />
          <FavoriteItems />
          <FeaturedItems category={category} setCategory={setCategory} />
        </div>
        <div className="grid col-span-2">
          <div>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
