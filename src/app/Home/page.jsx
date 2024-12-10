import React, { useState } from "react";
import FeaturedItems from "../components/homepage/FeaturedItems";
import PromoBanner from "../components/homepage/PromoBanner";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Checkout from "../Checkout/page";
import SideBar from "../components/common/SideBar";
import MenuList from "../components/Menu/MenuList";

const HomePage = () => {

  const [category,setCategory] = useState("All");
  return (
    <div className="flex flex-col ">
       <Header />
       
      <div className="flex gap-2">
        <div className="flex-none w-1/6 "><SideBar/></div>
        <div className="flex-auto w-5/6">
          <PromoBanner />
          <MenuList category={category} setCategory={setCategory}/>
          <FeaturedItems  category={category}/>
        </div>
        <div className="flex-auto hidden w-2/6 sm:block"><Checkout /></div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
