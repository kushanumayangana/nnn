import React from 'react';
import SearchBar from '../components/searchBar/SearchBar'

import CartItem from '../components/Cart/CartItem';
import PromoBanner from '../components/homepage/PromoBanner';
import RatingsDroupDown from '../components/searchBar/RatingsDroupDown'
import Menu from '../components/Menu/Menu'

const HomePage = () => {
  const foodData = [
    {
      id: 1,
      name: "Margherita Pizza",
      ratings: 4.5,
      ratingsCount : 100,
      deliveryFee : 300,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "30-40 min",
      favorite : true,
      cartImg : '/images/img01.png'
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      ratings: 4.7,
      ratingsCount : 200,
      deliveryFee: 3.49,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "25-35 min",
      favorite : true,
      cartImg : '/images/img02.png'
    },
    {
      id: 3,
      name: "Caesar Salad",
      ratings: 4.2,
      ratingsCount : 200,
      deliveryFee: 1.99,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "15-25 min",
      favorite : true,
      cartImg : '/images/img03.png'
    },
    {
      id: 4,
      name: "Cheeseburger",
      ratings: 4.8,
      ratingsCount : 200,
      deliveryFee: 3.99,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "20-30 min",
      favorite : true,
      cartImg : '/images/img01.png'
    },
    {
      id: 5,
      name: "Cheeseburger",
      ratings: 4.8,
      ratingsCount : 200,
      deliveryFee: 3.99,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "20-30 min",
      favorite : true,
      cartImg : '/images/img01.png'
    },
    {
      id: 6,
      name: "Cheeseburger",
      ratings: 4.8,
      ratingsCount : 200,
      deliveryFee: 3.99,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "20-30 min",
      favorite : true,
      cartImg : '/images/img01.png'
    },
    {
      id: 7,
      name: "Cheeseburger",
      ratings: 4.8,
      ratingsCount : 200,
      deliveryFee: 3.99,
      deliveryStatus: "Free Dilivery",
      deliveryTime: "20-30 min",
      favorite : true,
      cartImg : '/images/img01.png'
    }
  ];
  
  return (
    <div>
      {/* Main grid container */}
      <div className='grid-cols-12 sm:grid'>
        
          {/* Navigation bar container */}
          <div className='hidden col-span-1 sm:grid'>
            <h1>Navigation</h1>
          </div>
          
          {/* Banner, SearchBar , CartItems container */}
          <div className='col-span-12 sm:col-span-9'>

          <div className='flex items-start justify-center w-full'>
            <PromoBanner />
          </div>
            

          <div className='flex items-start justify-center w-full'>
            {/* Render SearchBar only once */}
          <SearchBar sItem={foodData} />
          </div>
            

          {/* FavaturedItems headline */}
          <div>
              <span className='text-black text-[20px] ml-2 font-bold'>Featured Items</span>
          </div>
            
          {/* Favorite items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            
          {foodData.map((food, index) => (
            <CartItem key={food.id} item={food} />
          
          ))}
          </div>
        
          </div>

          {/* User testomonials */}
          <div className='hidden col-span-2 sm:grid'>
            <h1>CheckOut and UserTestomonials</h1>
          </div>

      </div>
    </div>
  );
};

export default HomePage;
