import axios from 'axios';
import { API_URL } from './constants';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        return {
          ...config,
          headers: {
            Authorization: `Token ${token}`,
          },
        };
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await $api.post(
          '/users/auth/jwt/refresh/',
          localStorage.getItem('refreshToken')
        );
        localStorage.setItem('accessToken', response.data.access);
        return $api.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    throw error;
  }
);

export default $api;
