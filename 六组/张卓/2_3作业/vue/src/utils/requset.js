import axios from 'axios'
let instance = axios.create()
//添加请求拦截起
instance.interceptors.request.use(function(config){
    //发送请求之前做些什么
    return {
        ...config,
        headers:{
            ...config.headers,
            authorization:localStorage.getItem("token"),
            'x-csrf-token': document.cookie.split("=")[1]
        }
    }
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
  export default instance