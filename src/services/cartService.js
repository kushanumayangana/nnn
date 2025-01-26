import axios from "axios";
const API_URL = "http://localhost:3001/api/cart";

export const addToCart = async (cartItem, token) => {
  try {
    console.log(cartItem);
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cartItem),
    });

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error;
  }
};

// Get cart items
export const getCartItems = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw new Error("Failed to fetch cart items");
  }
};

//remove complete cart item
export const removeCartItem = async (cartItem, token) => {
  try {
    console.log(cartItem);

    const response = await fetch(`${API_URL}/remove/${cartItem.productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to remove cart item");
    }

    return await response.json();
  } catch (error) {
    console.error("Error removing cart item:", error);
    throw error;
  }
};

//update cart item count
export const updateCartItemCount = async (cartItem, token) => {
  try {
    console.log(cartItem.quantity);
    const response = await fetch(`${API_URL}/update-count`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: cartItem.userId,
        productId: cartItem.productId,
        count: cartItem.quantity,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update cart item count");
    }

    const result = await response.json();
    console.log("Cart item count updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating cart item count:", error);
    throw error;
  }
};
