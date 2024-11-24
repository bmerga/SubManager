import CONSTANTS from "../../constants";
import axios from "axios";

const publicApi = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export {publicApi}