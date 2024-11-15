// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getFoodItems = () => {
  return api.get('/fooditems');
};

export const createOrder = (orderData) => {
  return api.post('/orders', orderData);
};

export default api;
