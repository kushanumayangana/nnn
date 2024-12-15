import React from 'react';
import CartSummary from '../components/Checkout/CartSummary';
import AddReviewForm from '../components/Checkout/AddReviewForm';
import CustomerReviews from '../components/Checkout/customerReviews';
//import StoreContextProvider from "../context/StoreContext";

function Page() {

  return (

       <div className="w-full p-2 bg-gray-50">
      
      <CartSummary />
      <CustomerReviews />
      <AddReviewForm />
    </div>

   
  );
}

export default Page;
