import axios from "axios";
export const env = "prod";
const baseURL =
  env == "dev"
    ? "http://localhost:3001"
    : "https://interview-tracker-iitg.herokuapp.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    credentials: "include",
  },
});

export default axiosInstance;
