import axios, { AxiosInstance} from 'axios';

const BACEND_URL = 'https://10.react.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
