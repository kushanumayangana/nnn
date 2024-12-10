import React, { useState } from "react";

export const sampleFoodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "A simple yet classic Italian pizza with a light, fresh flavor.",
    price: 2500,
    image: "/Home/ex-01.jpg",
  },
  {
    id: 2,
    name: "Burger3",
    description: "A juicy burgedddr with fresh veggies and a soft bun.",
    price: 1500,
    image: "/Home/ex-01.jpg",
  },
  {
    id: 3,
    name: "Burger4",
    description: "A juicy burger witfffh fresh veggies and a soft bun.",
    price: 1500,
    image: "/Home/ex-01.jpg",
  },
  {
    id: 4,
    name: "Burger5",
    description: "A juicy burger with fresh veggies and a soft bun.",
    price: 1500,
    image: "/Home/ex-01.jpg",
  },
  {
    id: 5,
    name: "Burger7",
    description: "A juicffy burger with fresh veggies and a soft bun.",
    price: 1500,
    image: "/Home/ex-01.jpg",
  },
  // Add more sample items as needed
];

const MenuList = ({ category, setCategory }) => {
  return (
    <div className="flex mb-32 app-container">
      <div className="flex-1 p-4 search-results">
        <h2 className="text-lg font-semibold">Menu</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {sampleFoodItems.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "All" : item.name
                  )
                }
                key={index}
                className=""
              >
                <img
                  className={
                    category === item.name ? " border-red-800 border-4" : ""
                  }
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
