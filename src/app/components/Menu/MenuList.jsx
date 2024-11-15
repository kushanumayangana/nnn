import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuList = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/fooditems')
      .then((response) => {
        setFoodItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching food items:", error);
      });
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {foodItems.map(item => (
          <li key={item._id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
