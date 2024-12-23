import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../app/Home/page";
import ModelTest from "../app/AuthModels/ModelTest";
import PaymentSuccess from "../app/components/Payment/PaymentSuccess";
import PaymentFaild from "../app/components/Payment/PaymentFailed";
import OrderStatus from "../app/components/OrderStatus/OrderStatus";
import OrderConfirmation from "../app/OrderConfirmation/OrderConfirmation";

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modeltest" element={<ModelTest />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfaild" element={<PaymentFaild />} />
        <Route path="/order" element={<OrderStatus />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
};
export default Page;
