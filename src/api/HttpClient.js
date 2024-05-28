import axios from 'axios';
//##TODO FIX  baseURL: `${import.meta.env.VITE_API_URL}`
/** The configured Axios instance. */
export const HttpClient = axios.create({
  baseURL: `http://localhost:9000/api`
});
