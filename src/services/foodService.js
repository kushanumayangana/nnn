export const fetchFoodData = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/food/list");
    if (!response.ok) {
      throw new Error("Failed to fetch food items");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching food data:", error);
    return { success: false, data: [] };
  }
};
