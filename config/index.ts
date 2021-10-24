import axios from "axios";

/**
 * Expose a rest client for requests
 */
export const restClient = axios.create({
  baseURL: process.env.backendURL
});

/**
 * Set or delete headers with token
 * @param AuthToken
 */
export const handlerAuthToken = (authToken: any) => {
  if(!authToken) {
    delete restClient.defaults.headers.common['Authorization'];
    return;
  };
  restClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
};