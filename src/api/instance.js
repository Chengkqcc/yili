import axios from "axios"
let instance = axios.create({
    baseURL:"/api",
    timeout:3000
})
instance.interceptors.request.use((config) =>{
    //请求拦截  可以在这里展示使用loading
    return config
})
instance.interceptors.response.use((config) =>{
    //响应拦截器
    return config
})


export default instance