import axios, { InternalAxiosRequestConfig } from 'axios';

//##TODO FIX baseURL: `${import.meta.env.VITE_API_URL}`
const BASE_URL = `http://localhost:9000/api`;

/** The configured Axios instance. */
export const HttpClient = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: 'application/json' }
});

/**
 * Add a request interceptor to include the token in the headers.
 * The token is retrieved from the local storage and used to authenticate the user.
 * @param config The Axios request configuration.
 * @returns The Axios request configuration.
 * @throws An error if the token is not found.
 */
HttpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const tokenJwt = localStorage.getItem('ACCESS_TOKEN');
    if (tokenJwt && config.headers) {
      config.headers.Authorization = `Bearer ${tokenJwt}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
