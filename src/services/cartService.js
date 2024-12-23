export const addToCart = async (cartItem) => {
  try {
    const response = await fetch("http://localhost:3001/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};
