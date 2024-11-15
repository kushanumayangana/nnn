// src/services/foodService.js
import api from './api';

export const fetchFoodItems = () => {
  return api.get('/fooditems');
};
