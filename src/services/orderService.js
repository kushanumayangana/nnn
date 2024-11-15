// src/services/orderService.js
import api from './api';

export const createOrder = (orderData) => {
  return api.post('/orders', orderData);
};
