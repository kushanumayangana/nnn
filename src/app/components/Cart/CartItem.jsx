import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const CartItems = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="">
      <div className="">
        <div className="">
          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>{item.price * cartItems[item.id]}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            );
          }
        })}
      </div>

      <div className="">
        <div>
          <h2></h2>
          <div>
            <p>SubTotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{getTotalCartAmount() + 2}</p>
          </div>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartItems;
