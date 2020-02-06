import axios from 'axios';

const request = axios.create();
// Add a request interceptor
request.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return {
            ...config,
            headers: {
                ...config.headers,
                'authorization': window.localStorage.token,
            },
        };
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
request.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);
export default request;
