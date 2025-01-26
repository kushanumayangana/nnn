import axios from 'axios';

// Create Axios instance
const api = axios.create({
  baseURL: process.env.BASEURL || 'http://localhost:3002',
  withCredentials: true, 
});

let isRefreshing = false;
let refreshSubscribers = [];




// Function to notify all subscribers with the new token ADD DEVINDA
const notifySubscribers = (newAccessToken) => {
  refreshSubscribers.forEach((callback) => callback(newAccessToken));
  refreshSubscribers = [];
};






// Add Authorization header to requests
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log('Request Configuration:', config); 
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercept responses to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to token expiration
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          // Call refresh token API
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await axios.post(
            `${process.env.BASEURL || 'http://localhost:3002'}/auth/refresh`,
            {refreshToken},
            { withCredentials: true }
          );

          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;

          // Save the new access token
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          // // Notify all subscribers about the new token
          // refreshSubscribers.forEach((callback) => callback(newAccessToken));
          // refreshSubscribers = []; // Clear subscribers



          // Notify all subscribers about the new token ADD DEVINDA
          notifySubscribers(newAccessToken);




          isRefreshing = false;
        } catch (refreshError) {
          isRefreshing = false;
          console.error('Refresh token failed:', refreshError);

          // Optionally handle logout logic here
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken'); //ADD DEVINDA
          window.location.href = '/login'; // Redirect to login
          return Promise.reject(refreshError);
        }
      }

      // Wait for the new token and retry the request
      return new Promise((resolve) => {
        refreshSubscribers.push((newToken) => {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          resolve(api(originalRequest));
        });
      });
    }

    return Promise.reject(error);
  }
);

export default api;

