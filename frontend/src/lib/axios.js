// import axios from 'axios';

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5002/api" : "/api",
//   withCredentials: true,
// });

import axios from "axios";

// Vite-style env access
const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5002/api"
    : import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

