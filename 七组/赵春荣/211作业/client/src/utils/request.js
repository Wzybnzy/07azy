import axios from 'axios';
import { createContext } from 'react';
const request = axios.create();

request.interceptors.request.use(
    function(config) {
        return {
            ...config,
            headers: { ...config.headers, 'authorization': window.localStorage.token },
        };
    },
    function(error) {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default request;
