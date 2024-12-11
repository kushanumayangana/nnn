import { createContext, useEffect, useState } from "react";
//import { sampleFoodItems } from "../components/Checkout/CartSummary";
import { foodData } from "../components/Home/FoodItem";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    // Check if the user has already submitted a review
    const userReviewExists = reviews.some(
      (review) => review.email === newReview.email
    );

    if (userReviewExists) {
      alert("You can only submit one review.");
      setReviews((prev) => [...prev]);
      return;
    }

    // If no review from this user exists, add the review
    setReviews((prev) => [...prev, newReview]);
    console.log("Updated Reviews:", [...reviews, newReview]);
  };

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodData.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.warn(`Item with id: ${item} not found in sampleFoodItems`);
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    foodData,
    cartItems, // Use cartItems consistently
    setCartItems,
    addToCart,
    removeFromCart,
    food_list: foodData,
    reviews,
    addReview,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
