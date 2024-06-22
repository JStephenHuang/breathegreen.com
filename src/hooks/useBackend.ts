import axios, { AxiosRequestConfig } from "axios";

import { Cookies } from "react-cookie";

export const useBackend = () => {
  const config: AxiosRequestConfig = {};

  const cookies = new Cookies();

  if (cookies.get("token") !== undefined) {
    config.headers = {
      Authorization: `Bearer ${cookies.get("token")}`,
    };
  }

  config.baseURL = `${import.meta.env.VITE_BACKEND}`;
  config.withCredentials = true;

  return axios.create(config);
};
