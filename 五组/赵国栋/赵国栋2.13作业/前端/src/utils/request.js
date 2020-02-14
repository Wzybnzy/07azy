import axios from "axios"

const httpAxios=axios.create()
httpAxios.interceptors.request.use(function(config){
    return{
        ...config,
        headers:{
            ...config.headers,
            "authorization":JSON.parse(window.localStorage.user).token
        }
    }
},function(error){
    return Promise.reject(error)
})

httpAxios.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})

export default httpAxios