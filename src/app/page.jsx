import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../app/Home/page';
import ModelTest from "../app/AuthModels/ModelTest";
import Payment from "../app/components/Payment/PaymentSuccess";
import PaymentFaild from "../app/components/Payment/PaymentFailed";
import OrderStatus from "../app/components/OrderStatus/OrderStatus";



const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modeltest" element={< ModelTest />} />
        <Route path="/payment" element={< Payment />} />
        <Route path="/paymentfaild" element={< PaymentFaild />} />
        <Route path="/order" element={< OrderStatus />} />



      </Routes>
    </Router>
  );
};
export default Page;
