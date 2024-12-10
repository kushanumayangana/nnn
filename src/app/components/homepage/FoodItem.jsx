import React, { useContext} from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {


  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  
  return (
    <div className="">
      <div>
        <img className="w-20 h-15" src={image} alt="" />
        {
            
          <div>
            <img
              onClick={() => addToCart(id)}
              className="w-6 h-6 "
              src={"/Home/plus.svg"}
              alt=""
            />
            <p>{cartItems[id] || 0}</p>
            <img
              onClick={() =>
                removeFromCart(id)
              }
              className="w-6 h-6 "
              src={"/Home/minus.svg"}
              alt=""
            />
           
          </div>
        }
      </div>
      <div>
        <div>
          <p>{name}</p>
        </div>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
