import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

// Food Data
export const foodData = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 15,
    description: "Description hello",
    ratings: 4.5,
    ratingsCount: 100,
    deliveryFee: 300,
    deliveryStatus: "Free Delivery",
    deliveryTime: "30-40 mins",
    favorite: true,
    cartImg: "Test/images/img01.png",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    price: 15,
    description: "Description hello",
    ratings: 4.7,
    ratingsCount: 200,
    deliveryFee: 3.49,
    deliveryStatus: "Free Delivery",
    deliveryTime: "25-35 mins",
    favorite: true,
    cartImg: "Test/images/img02.png",
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 15,
    description: "Description hello",
    ratings: 4.2,
    ratingsCount: 200,
    deliveryFee: 1.99,
    deliveryStatus: "Free Delivery",
    deliveryTime: "15-25 mins",
    favorite: true,
    cartImg: "Test/images/img03.png",
  },
  {
    id: 4,
    name: "Spaghetti Carbonara",
    price: 15,
    description: "Description hello",
    ratings: 4.7,
    ratingsCount: 200,
    deliveryFee: 3.49,
    deliveryStatus: "Free Delivery",
    deliveryTime: "25-35 mins",
    favorite: true,
    cartImg: "Test/images/img02.png",
  },
  {
    id: 5,
    name: "Spaghetti Carbonara",
    price: 15,
    description: "Description hello",
    ratings: 4.7,
    ratingsCount: 200,
    deliveryFee: 3.49,
    deliveryStatus: "Free Delivery",
    deliveryTime: "25-35 mins",
    favorite: true,
    cartImg: "Test/images/img02.png",
  },
  {
    id: 6,
    name: "Spaghetti Carbonara",
    price: 15,
    description: "Description hello",
    ratings: 4.7,
    ratingsCount: 200,
    deliveryFee: 3.49,
    deliveryStatus: "Free Delivery",
    deliveryTime: "25-35 mins",
    favorite: true,
    cartImg: "Test/images/img02.png",
  },
  {
    id: 7,
    name: "Spaghetti Carbonara",
    price: 15,
    description: "Description hello",
    ratings: 4.7,
    ratingsCount: 200,
    deliveryFee: 3.49,
    deliveryStatus: "Free Delivery",
    deliveryTime: "25-35 mins",
    favorite: true,
    cartImg: "Test/images/img02.png",
  },
  {
    id: 8,
    name: "Spaghetti Carbonara",
    price: 15,
    description: "Description hello",
    ratings: 4.7,
    ratingsCount: 200,
    deliveryFee: 3.49,
    deliveryStatus: "Free Delivery",
    deliveryTime: "25-35 mins",
    favorite: true,
    cartImg: "Test/images/img02.png",
  },
];

// Food Item Component
const FoodItem = ({ id, name, price, description, cartImg }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      {/* Image and Buttons */}
      <div className="food-item-image">
        <img className="w-20 h-15" src={cartImg} alt={name} />
        <div className="cart-actions">
          <img
            onClick={() => addToCart(id)}
            className="w-6 h-6"
            src="/Home/plus.svg"
            alt="Add to cart"
          />
          <p>{cartItems[id] || 0}</p>
          <img
            onClick={() => removeFromCart(id)}
            className="w-6 h-6"
            src="/Home/minus.svg"
            alt="Remove from cart"
          />
        </div>
      </div>
      {/* Details */}
      <div className="food-item-details">
        <p className="food-name">{name}</p>
        <p className="food-description">{description}</p>
        <p className="food-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

// Parent Component
const FoodList = () => {
  const cartData = foodData.map(({ id, name, price, description, cartImg }) => ({
    id,
    name,
    price,
    description,
    cartImg,
  }));

  return (
    <div className="food-list">
      {cartData.map((item) => (
        <FoodItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          cartImg={item.cartImg}
        />
      ))}
    </div>
  );
};

export default FoodList;
