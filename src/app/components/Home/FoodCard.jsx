import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaHeart, FaClock } from "react-icons/fa";
import {
  addToCart,
  removeCartItem,
  updateCartItemCount,
  getCartItems,
} from "../../../services/cartService";
import FoodItemModel from "./FoodItemModel";

const CartItem = ({ item, userId }) => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("accessToken");

      // Check if login message shown
      const loginMessageShown = localStorage.getItem("loginMessageShown");

      if (!token && !loginMessageShown) {
        setShowLoginMessage(true);
        localStorage.setItem("loginMessageShown", "true");
        return;
      }

      if (!token) {
        return;
      }

      try {
        const response = await getCartItems(token);
        // console.log("Cart items fetched:", response);

        const cartItems = response.data;
        // console.log(cartItems.quantity)

        const cart = cartItems.find(
          (response) => response.productId === item._id
        );
        // console.log(cart.quantity);
        if (cart) {
          console.log(`Fetched count for item ${item._id}:`, cart.count);
          setCount(cart.count);
          setIsInCart(true);
          localStorage.setItem(`cart_${item._id}`, cart.count); // Save count to localStorage
        }
      } catch (error) {
        console.error("Error fetching cart items DW:", error);
      }
    };

    fetchCartItems();
  }, [item._id, userId]);

  //Restore cart count from localStorage
  // useEffect(() => {
  //   const savedCount = localStorage.getItem(`cart_${item._id}`);
  //   if (savedCount) {
  //     const parsedCount = parseInt(savedCount, 10);
  //     if (!isNaN(parsedCount)) {
  //       setCount(parsedCount);
  //       setIsInCart(true);
  //     }
  //   }
  // }, [item._id]);

  const toggleIconColor = () => {
    setIsClicked(!isClicked);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleIncrement = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      // console.log("Token not found. Showing login message.");
      setShowLoginMessage(true);
      // console.log("Login required. Showing message.");
      return;
    }
    const updatedCount = count + 1;
    setCount(updatedCount);
    localStorage.setItem(`cart_${item._id}`, updatedCount); // Update localStorage

    const cartItem = {
      userId,
      productId: item._id,
      productName: item.name,
      category: item.category,
      image: item.image,
      totalPrice: item.price * (count + 1),
      quantity: updatedCount,
      description: item.description,
      ratings: item.ratings || 0,
      ratingsCount: item.ratingsCount || 0,
      selectedSides: item.customizedItems,
      shippingFee: item.deliveryFee,
      deliveryDuration: item.deliveryDuration,
      discountPercentage: item.discountPercentage,
      discountPrice: item.discountPrice,
      hasOffer: item.hasOffer,
    };

    try {
      const token = localStorage.getItem("accessToken");
      console.log("User token:", token);

      if (isInCart) {
        const data = await updateCartItemCount(cartItem, token);
        if (data && data.data) {
          setCount(data.data.count);
          setSuccessMessage("Item added successfully upadte!");
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 2000);
        }
      } else {
        const data = await addToCart(cartItem, token);
        if (data && data.data) {
          setCount(data.data.count);
          setIsInCart(true);
          setSuccessMessage("Item added successfully add!");
          setShowSuccessMessage(true);
          setTimeout(() => setShowSuccessMessage(false), 2000);
        }
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleDecrement = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setShowLoginMessage(true);
      // console.log("Login required. Showing message.");
      return;
    }

    if (count === 0) {
      setShowEmptyCartMessage(true);
      return;
    }

    if (count > 0) {
      const updatedCount = count - 1;
      setCount(updatedCount);
      localStorage.setItem(`cart_${item._id}`, updatedCount); // Update localStorage

      const cartItem = {
        userId,
        productId: item._id,
        productName: item.name,
        category: item.category,
        image: item.image,
        totalPrice: item.price * (count - 1),
        quantity: updatedCount,
        description: item.description,
        ratings: item.ratings || 0,
        ratingsCount: item.ratingsCount || 0,
        selectedSides: item.customizedItems,
        shippingFee: item.deliveryFee,
        deliveryDuration: item.deliveryDuration,
        discountPercentage: item.discountPercentage,
        discountPrice: item.discountPrice,
        hasOffer: item.hasOffer,
      };

      try {
        const token = localStorage.getItem("accessToken");
        // console.log("User token:", token);

        if (updatedCount === 0) {
          const data = await removeCartItem(item._id, token);
          if (data && data.data) {
            setCount(0);
            setIsInCart(false);
            setSuccessMessage("Item removed successfully!");
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 2000);
            // alert("Item removed from cart!");
          }
        } else {
          const data = await updateCartItemCount(cartItem, token);
          if (data && data.data) {
            setCount(data.data.count);
            setSuccessMessage("Item removed successfully!");
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 2000);
          }
        }
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    }
  };

  return (
    <div>
      <div className="relative m-2">
        <div className="relative">
          {/* Favorite (heart) button */}
          <div
            className={`absolute right-0 flex items-center justify-center m-2 rounded-full w-7 h-7 ${
              isClicked ? "bg-orange-500" : "bg-white"
            }`}
          >
            <button onClick={toggleIconColor}>
              <FaHeart
                className={`transition-colors duration-300 ${
                  isClicked ? "fill-white" : "fill-orange-500"
                }`}
              />
            </button>
          </div>

          <div className="absolute bottom-0 right-0 flex items-center justify-center gap-1 m-2 text-white">
            {/* Decrement button */}
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7">
              <button onClick={() => handleDecrement(item.id)}>
                <FaMinus className="fill-black" />
              </button>
            </div>

            {/* Current item quantity */}
            <div className="flex items-center justify-center bg-orange-500 rounded-full w-7 h-7">
              {count}
            </div>

            {/* Increment button */}
            <div className="flex items-center justify-center bg-white rounded-full w-7 h-7">
              <button onClick={() => handleIncrement(item.id)}>
                <FaPlus className="fill-orange-600" />
              </button>
            </div>
          </div>

          {/* Food item image (opens modal on click) */}
          <img
            onClick={handleOpenModal}
            className="object-cover w-[253px] h-[143px] rounded-[10px]"
            src={`http://localhost:3001/images/${item.image}`}
            alt=""
          />
        </div>

        {/* Food item name and ratings */}
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <span className="text-black text-[15px] sm:text-[15px] xl:text-[15px] font-bold">
              {item.name}
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-[#616161] text-[15px] sm:text-[15px] font-bold">
              {item.ratings}
            </span>
            <span className="text-[#616161] text-[11px] sm:text-[11px]">
              ({item.ratingsCount})
            </span>
            <FaPlus className="size-3 fill-[#616161]" />
          </div>
        </div>

        {/* Placeholder row for additional actions or info */}
        <div className="flex items-center justify-between">
          <span className="font-extrabold 2xl:text-[20px] xl:text-[18px] text-red-500">
            <span className="2xl:text-[14px] xl:text-[13px]">Rs.</span>
            {item.totalPrice}/=
            <span className="text-gray-500 2xl:text-[14px] xl:text-[14px] ml-1 ">
              {" "}
              Rs.
            </span>
            <span className="line-through text-gray-500 2xl:text-[14px] xl:text-[14px]">
              {item.discountPrice}
            </span>
          </span>
          <span className="font-extrabold 2xl:text-[18px] xl:text-[15px] text-red-500">
            {item.discountPercentage}% Off
          </span>
        </div>

        {/* Delivery fee and status */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-start-center">
            <img
              className=""
              src="/Test/assets/cart/img02.png"
              alt="DeliveryImg"
            />
            <span className="text-[#616161] text-[12px] sm:text-[12px] font-semibold pl-1">
              {item.deliveryFee} /=
            </span>
            <span className="text-[#616161] text-[12px] sm:text-[12px] font-semibold">
              {item.deliveryStatus}
            </span>
          </div>

          {/* Delivery time */}
          <div className="flex space-x-1 items-start-center">
            <FaClock className="fill-[#616161]" />
            <span className="text-[#616161] text-[11px] sm:text-[11px] font-semibold">
              {item.deliveryDuration} - {item.deliveryDuration} min
            </span>
          </div>
        </div>
      </div>

      {/* Food item modal component */}
      <FoodItemModel
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={item}
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        setShowLoginMessage={setShowLoginMessage}
        token={localStorage.getItem("accessToken")}
      />

      {showLoginMessage && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-lg">
            <p>Please log in to update your cart.</p>
            <button onClick={() => setShowLoginMessage(false)}>Close</button>
          </div>
        </div>
      )}

      {showEmptyCartMessage && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-lg">
            <p>Your cart is empty.</p>
            <button onClick={() => setShowEmptyCartMessage(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-lg">
            <p>{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
