import { createContext, useState } from "react";
//import { fetchFoodData } from "../../services/foodService.js";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchFood = async () => {
  //     const data = await fetchFoodData();
  //     if (data.success) {
  //       setFoodData(data.data);
  //     } else {
  //       console.error("Error fetching food data");
  //     }
  //   };
  //   fetchFood();
  // }, []);



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
    console.log("Adding to cart item with ID:", itemId);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = foodData.find((food) => food._id === itemId);
      return total + (item?.price || 0) * (cartItems[itemId] || 0);
    }, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        foodData,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        reviews,
        setReviews,
        addReview,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
