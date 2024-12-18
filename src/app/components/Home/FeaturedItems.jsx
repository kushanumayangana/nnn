import React, { useState, useEffect } from "react";
import { fetchFoodData } from "../../../services/foodService";
import CartItem from "./FoodCard";

const FeaturedItems = ({ category }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetchFoodData();
        if (data.success) {
          setList(data.data);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, []);

    // Filter the list based on the selected category
    const filteredList =
    category === "All" ? list : list.filter((item) => item.category === category);


  return (
    <div>
      <div className="mt-4">
        <div>
          <span className="text-black text-[20px] ml-2 font-bold">
            Featured Foods
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {loading ? (
            <p>Loading...</p>
          ) : filteredList.length > 0 ? (
            filteredList.map((item) => <CartItem key={item._id} item={item} />)
          ) : (
            <p>No featured foods available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
