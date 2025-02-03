import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
  headers: {
    "X-API-KEY": "5ed0a7d98575416fa20b230817568b4f",
  },
});

export default axiosInstance;
