import axios, { AxiosRequestConfig } from "axios";

import { Cookies } from "react-cookie";

export const useBackend = () => {
  const config: AxiosRequestConfig = {};

  config.headers = {
    "Access-Control-Allow-Origin": `${import.meta.env.VITE_BACKEND}/api`,
  };

  config.baseURL = `${import.meta.env.VITE_BACKEND}/api`;
  config.withCredentials = true;

  const cookies = new Cookies();

  if (cookies.get("token") !== undefined) {
    config.headers = {
      Authorization: `Bearer ${cookies.get("token")}`,
    };
  }

  return axios.create(config);
};
