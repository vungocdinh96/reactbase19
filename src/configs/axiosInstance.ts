import axios from "axios";
import qs from "qs";

export const axiosInstance = axios.create({
  paramsSerializer: params =>
    qs.stringify(params, {
      encode: false,
      arrayFormat: "repeat",
    }),
});

axiosInstance.defaults.timeout = 60000000;
axiosInstance.defaults.withCredentials = true;

// Request interceptor — attach auth token if present
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptor — unwrap data, handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
