import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../app/Home/page';
import MenuPage from '../app/Menu/page';
import CartPage from '../app/components/Cart/CartItem'
//import Layout from '../app/layout';

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<CartPage />} />
      </Routes>
    </Router>
  );
};
export default Page;
