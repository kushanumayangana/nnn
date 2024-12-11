import React from 'react';

const OrderSummary = ({ order }) => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Total Items: {order.totalItems}</p>
      <p>Total Price: ${order.totalPrice}</p>
      <p>Delivery Address: {order.deliveryAddress}</p>
    </div>
  );
};

export default OrderSummary;