import { createContext, useEffect, useState } from "react";
import { sampleFoodItems } from "../components/Menu/MenuList";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const [reviews, setReviews] = useState([
    // {
    //   name: "Devinda W.",
    //   rating: 3,
    //   review:
    //     "I love using this website! It’s incredibly easy to navigate, and the food arrives hot and fresh every time. The low prices make it even better! Highly recommend it to all students!",
    // },
    // {
    //   name: "Chalitha A.",
    //   rating: 4,
    //   review:
    //     "I love using this website! It’s incredibly easy to navigate, and the food arrives hot and fresh every time. The low prices make it even better! Highly recommend it to all students!",
    // },
  ]);

  const addReview = (newReview) => {
    // Check if the user has already submitted a review
    const userReviewExists = reviews.some((review) => review.email === newReview.email);

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
        let itemInfo = sampleFoodItems.find(
          (product) => product.id === Number(item)
        );
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
    sampleFoodItems,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    food_list: sampleFoodItems,
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
