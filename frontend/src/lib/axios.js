// import axios from 'axios';

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5002/api" : "/api",
//   withCredentials: true,
// });

import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5002/api"
    : process.env.REACT_APP_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
