import React, { useState } from "react";
import FeaturedItems from "../components/Home/FeaturedItems";
import PromoBanner from "../components/Home/PromoBanner";
import SearchBar from "../components/Home/SearchBar";
import Checkout from "../Checkout/page";
import SideBar from "../components/common/SideBar";
//import { foodData } from "../components/Home/FoodItem";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex gap-2">
          <div className="flex-none w-1/6 ">
            <SideBar />
          </div>
          <div className="flex-auto w-5/6">
            <PromoBanner />
            <SearchBar />

            <div>
              <FeaturedItems category={category} />
            </div>

            {/* <MenuList category={category} setCategory={setCategory}/> */}
            {/* <HomeTest/> */}
          </div>
          <div className="flex-auto hidden w-2/6 sm:block">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
