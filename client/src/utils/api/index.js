import { message } from "antd";
import axios from "axios";
import { createBrowserHistory } from "history";
import { CookieManager } from "../CookieManager";

const history = createBrowserHistory();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + "/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = CookieManager.get("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    if (error.response.status === 401) {
      history.push("/login");
    }
    message.error("Error - " + error.response.data.message);
  }
);

export default axiosInstance;
