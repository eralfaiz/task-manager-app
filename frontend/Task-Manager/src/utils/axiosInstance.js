import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        //Unauthorized error - token might be expired or invalid
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login page
      } else if (error.response.status == 500) {
        //Handle server errors (optional)
        console.error("Server Error:", error.response.data);
      } else if (error.code == "ECONNABORTED") {
        //Handle server errors (optional)
        console.error("Request timed out. Please try again.");
      } else {
        //Handle other types of errors (optional)
        console.error("API Error:", error.response.data);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
