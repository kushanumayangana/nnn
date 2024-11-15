// src/services/authService.js
import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:5000/api/users/login', { email, password });
};

export const register = (name, email, password) => {
  return axios.post('http://localhost:5000/api/users/register', { name, email, password });
};
