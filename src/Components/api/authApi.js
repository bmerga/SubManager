import CONSTANTS from "../../constants";
import axios from "axios";

const authApi = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("acme_jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { authApi };
