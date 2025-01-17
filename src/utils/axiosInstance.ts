import axios from "axios";

// const API_KEY = import.meta.env.VITE_OPENSEA_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
  headers: {
    "X-API-KEY": "5ed0a7d98575416fa20b230817568b4f",
  },
});

export default axiosInstance;