import axios, { InternalAxiosRequestConfig } from 'axios';
import { rootStore } from '@stores/global/RootStore';

const BASE_URL = 'http://localhost:9000/api';

if (!BASE_URL) {
  throw new Error('BASE_URL is not defined. Please check your .env files.');
}

/** The configured Axios instance. */
export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: 'application/json' }
});

/**
 * Add a request interceptor to include the token in the headers.
 * The token is retrieved dynamically from the store and used to authenticate the user.
 * @param config The Axios request configuration.
 * @returns The Axios request configuration.
 */
HttpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { token } = rootStore.authStore; // Get the token dynamically from the store
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
