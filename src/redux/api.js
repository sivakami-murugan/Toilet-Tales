import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Get the auth token dynamically, e.g., from local storage or a state management store (like Redux)
const token = localStorage.getItem("accessToken");

// Create an Axios instance with a base URL and common headers
const api = axios.create({
  baseURL: BASE_URL, // Replace with your actual base URL
  headers: {
    Authorization: `Bearer ${token}`, // Set the Bearer token
    "Content-Type": "application/json", // Set any other headers you need
  },
});

// You can also add interceptors for token refresh or handling errors
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from local storage dynamically
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
