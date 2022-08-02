import axios from 'axios';
import {
  getResult,
  getErrorObject,
  getLanguage
} from './AxiosConfig';

export const axiosOpen = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'accept-language': getLanguage()
  },
  timeout: 20000
});

export const resetAxiosOpen = () => {
  axiosOpen.interceptors.request.use((requestConfig) => {
    requestConfig.headers['accept-language'] = getLanguage();
    return requestConfig;
  });
};

axiosOpen.interceptors.request.use(
  requestConfig => {
    requestConfig.headers = {
      ...requestConfig.headers
    };
    return requestConfig;
  },
  error => Promise.reject(error),
);

axiosOpen.interceptors.response.use(
  response => {
    return getResult(response);
  },
  error => {
    const errorObj = getErrorObject(error.response);
    return Promise.reject(errorObj);
  },
);
