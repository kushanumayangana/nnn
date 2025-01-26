import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addToCart } from "../../../services/cartService.js";

function FoodItemModel({ isOpen, onClose, product, count, handleIncrement, handleDecrement, userId, setShowLoginMessage, token }) {
  // const [count, setCount] = useState(product.count || 0);
  const [selectedTops, setSelectedTops] = useState([]);
  const [selectedSides, setSelectedSides] = useState([]);
  const [totalPrice, setTotalPrice] = useState(product.totalPrice || 0);
  const [showSuccess, setShowSuccess] = useState(false);

  // const [showCountMessage, setShowCountMessage] = useState(false);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  // prvent bg scrolling
  const openModal = () => {
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    document.body.style.overflow = "";
  };


  // Generic handler for checkbox selection
  const handleCustomizedChange = (e, item, type) => {
    const { checked } = e.target;

    const setState = type === "top" ? setSelectedTops : setSelectedSides;

    setState((prev) => {
      let updatedItems;
      let newTotalPrice = totalPrice;

      if (checked) {
        updatedItems = [...prev, item];

        newTotalPrice += item.itemPrice || 0;
      } else {
        updatedItems = prev.filter(
          (selectedItem) => selectedItem.name !== item.itemName
        );

        newTotalPrice -= item.itemPrice || 0;
      }
      // console.log("Updated Total Price:", newTotalPrice);
      setTotalPrice(newTotalPrice);
      return updatedItems;
    });
  };



  
  // Handle add to cart button
  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();




  if (!token) {
    console.log("Token not found, triggering login alert.");
    // alert("Please log in to add items to the cart."); // Ensure this is the alert logic
    if (typeof setShowLoginMessage === "function") {
      setShowLoginMessage(true); // Trigger parent component logic
    }
    return;
  }

  
  if (count <= 0) {
    // setShowCountMessage(true);
    alert("Please select a count before adding the item to the cart.");
    return;
}

  
    const cartItem = {
      userId,
      productId: product._id,
      productName: product.name,
      category: product.category,
      image: product.image,
      totalPrice: product.price * (count + 1),
      description: product.description,
      ratings: product.ratings || 0,
      ratingsCount: product.ratingsCount || 0,
      selectedSides: product.customizedItems,
      shippingFee: product.deliveryFee,
      deliveryDuration: product.deliveryDuration,
      discountPercentage: product.discountPercentage,
      discountPrice: product.discountPrice,
      hasOffer: product.hasOffer,
      quantity: count,
      
    };

    try {

      const token = localStorage.getItem("accessToken"); // Retrieve token from localStorage
      console.log("User token:", token);

      const result = await addToCart(cartItem, token);
      console.log("Cart API response:", result);
      if (result.success) {
        setShowSuccess(true); // Show success popup
        setTimeout(() => {
          setShowSuccess(false);
          onClose(); 
       }, 1000); 
        
      } else {
        console.error("Failed to add item to cart:", result.error);
      }
    } catch (error) {
      console.error("Error while adding to cart:", error);
    }

    // console.log("Cart Items:", cartItem);
  };



  useEffect(() => {
    if (!isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="absolute flex flex-col px-6 py-2 bg-white rounded-lg shadow-2xl w-[80%] max-w-[400px] 2xl:max-w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <button
            className="text-2xl text-gray-500 lg:text-3xl 2xl:text-4xl hover:text-black"
            onClick={() => {
              closeModal();
              onClose();
            }}
          >
            &times;
          </button>
        </div>
        <p className="font-bold text-[18px] 2xl:text-[20px]">{product.name}</p>
        <p className="font-bold text-[12px] 2xl:text-[15px] text-[#616161]">
          {product.description}
        </p>
        <div className="flex">
          <p className="font-bold text-[16px] 2xl:text-[20px] text-[#616161] inline-flex ">
            {product.ratings}
            <IoStar className="mt-[4px] ml-1 mr-1" />
          </p>
          <p className="text-[16px] 2xl:text-[20px] text-[#616161] inline-flex font-bold">
            ({product.ratingsCount}
            <IoIosAdd className="mt-[4px]" />)
          </p>
          <p className="font-bold text-[16px] 2xl:text-[22px] text-[#616161] inline-flex ml-1">
            Rs:{product.totalPrice}/=
          </p>
        </div>
        <img
          className=""
          src={`http://localhost:3001/images/${product.image}`}
          alt="product.image"
        />

        

        {product.customizedItems && product.customizedItems.length > 0 && (
          <>
            {product.customizedItems.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold text-[12px] 2xl:text-[15px] 2xl:mt-2">
                  Add a {item.itemPart || "N/A"}
                </p>
                <p className="text-[9px] 2xl:text-[13px] text-[#616161] -mt-2">
                  (optional)
                </p>

                <label className="block">
                  <div className="flex 2xl:mt-1 ">
                    <input
                      type="checkbox"
                      value={item.itemName}
                      onChange={(e) => {
                        handleCustomizedChange(e, item, item.itemPart);
                      }}
                      className="w-[28px] h-[18px] xs:w-[20px] xs:h-[20px] 2xl:w-[26px] 2xl:h-[26px] mr-2 mt-[3px] border-4 rounded-full bg-gray-100  border-black"
                    />
                    <div>
                      <p className="font-bold text-[10px] 2xl:text-[12px] mb-[-2px]">
                        {item.itemName || "N/A"}
                      </p>
                      <p className="font-bold text-[10px] 2xl:text-[11px] text-[#616161]">
                        Add a RS.{item.itemPrice || 0}/=
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </>
        )}

     

        <div className="flex items-center justify-between mt-[-3px] ">
          <div className="w-[100px] h-[30px] flex my-4 2xl:w-[111px] gap-x-[4px] 2xl:gap-x-[6px] ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDecrement();
              }}
              className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-black rounded-full flex items-center justify-center"
              type="button"
            >
              <FaMinus color="white" className="" />
            </button>





            <div className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px] bg-[#FF4C00] rounded-full flex items-center justify-center">
              <span className=" text-white text-[16px] xs:text-[20px] ">
                {count}
              </span>
            </div>
            

            {/* {count < 10 ? (
              <div className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-[#FF4C00] rounded-full flex items-center justify-center">
                <span className=" text-white text-[16px]  xs:text-[20px] ">
                  {count}
                </span>
              </div>
            ) : (
              <div className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-[#FF4C00] rounded-full flex items-center justify-center">
                <span className=" text-white text-[16px]  xs:text-[20px]">
                  {count}
                </span>
              </div>
            )} */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleIncrement();
              }}
              className="w-[22px] xs:w-[30px] h-[22px] xs:h-[30px]  bg-[#FF4C00] rounded-full flex items-center justify-center  "
              type="button"
            >
              <FaPlus className="" color="white" />
            </button>
          </div>

          <div className="flex ml-1">
            <button
              onClick={handleAddToCart}
              type="button"
              className="bg-[#FF4C00] px-2 2xl:px-0 text-white font-bold rounded-full h-[24px] 2xl:h-[33px] w-[120px] xs:w-[169px] 2xl:w-[200px] md:w-[200px] shadow-2xl hover:bg-[#E54300] flex items-center justify-center xs:h-[30px]"
            >
              {totalPrice > 0 && window.innerWidth < 640 ? (
                <span className=" font-bold text-[10px] xs:text-[12px] 2xl:text-[15px] 2xl:w-[103px]">
                  Add -
                </span>
              ) : (
                <span className=" font-bold text-[10px] xs:text-[12px] 2xl:text-[15px] 2xl:w-[103px]">
                  Add to Cart -
                </span>
              )}
              <span className=" py-1 text-white rounded-2xl 2xl:text-[15px] text-[10px] xs:text-[12px]">
                Rs.
                {totalPrice}
                /=
              </span>
            </button>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <p>Item added to cart successfully!</p>
          </div>
        </div>
      )}






    </div>
  );
}

export default FoodItemModel;
