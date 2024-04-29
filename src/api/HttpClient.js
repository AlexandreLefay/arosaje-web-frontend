import axios from 'axios';

/** The configured Axios instance. */
export const HttpClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
});
