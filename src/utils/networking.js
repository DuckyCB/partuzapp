import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.5:3000',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
