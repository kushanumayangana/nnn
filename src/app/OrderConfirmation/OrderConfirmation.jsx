import React, { useState } from "react";
import OrderDetails from "../components/OrderConfirmation/OrderDetails";
import PlaceOrder from "../components/OrderConfirmation/PlaceOrder";
import PromoBanner from "../components/Home/PromoBanner";
import SideBar from "../components/common/SideBar";
import CustomerReviews from "../components/Checkout/customerReviews";
import AddReviewForm from "../components/Checkout/AddReviewForm"
import CartSummary from "../components/Checkout/CartSummary";

const Page = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="grid grid-cols-12">
      <div className="grid col-span-1 ">
        <SideBar />
      </div>

        <div className="grid col-span-9 ">
          <PromoBanner />
            <div className="grid grid-cols-9">
              <div className="grid col-span-1 ">

              </div>

                <div className="grid col-span-3 mt-5">
                  <OrderDetails />
                  <CartSummary/>
                </div>

              <div className="grid col-span-1 ">

              </div>

                <div className="grid col-span-3 mt-5">
                  <PlaceOrder />
                </div>

              <div className="grid col-span-1 ">
                
              </div>
            </div>
        </div>

      <div className="grid col-span-2">
      {/* <Checkout /> */}
      <div className="ml-5">
        <CustomerReviews/>
      </div>
        <AddReviewForm/>
      </div>
      
    </div>
  );
};

export default Page;