import { Platform } from 'react-native';
import axios from 'axios';
import {
  getResult,
  reactOnStatusCode,
  getErrorObject,
  getAuthToken,
  getLanguage
} from './AxiosConfig';

export const axiosAuth = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'client-type': Platform.OS,
    'Authorization': getAuthToken(),
    'accept-language': getLanguage()
  },
  timeout: 20000
});

export const resetAxiosAuth = () => {
  axiosAuth.interceptors.request.use(async (requestConfig) => {
    requestConfig.headers['Authorization'] = getAuthToken();
    requestConfig.headers['accept-language'] = await getLanguage();
    return requestConfig;
  });
};

axiosAuth.interceptors.request.use(
  requestConfig => {
    requestConfig.headers = {
      ...requestConfig.headers
    };
    return requestConfig;
  },
  error => Promise.reject(error),
);

axiosAuth.interceptors.response.use(
  response => {
    return getResult(response);
  },
  error => {
    const errorObj = getErrorObject(error.response);
    reactOnStatusCode(errorObj);
    return Promise.reject(errorObj);
  },
);
