import axios from "axios";


let httpRequest = axios.create({
    baseURL: '/api',   // 基本请求地址
    timeout: 3000,  // 请求等待响应的超时时间
});

// 请求拦截器
httpRequest.interceptors.request.use((config) => {
    return config
})

// 响应拦截器
httpRequest.interceptors.response.use((response) => {
    return response.data
})

export default httpRequest
