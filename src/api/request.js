import axios from 'axios'
// import router from '../router'
// import cookies from 'vue-cookies'
// Vue.prototype.$cookies = VueCookies
// Vue.use(VueCookies)

let service = axios.create({
    // baseURL: 'http://121.37.243.219',
    // baseURL: 'http://127.0.0.1:5000',
    // 超时时间
    // timeout: 5 * 10000,
    // 是否允许携带凭证
    withCredentials: true,
    //配置请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

// 请求拦截器
service.interceptors.request.use(config => {
    const token = cookies.get('token')
    if (token) {
        config.headers['Authorization'] = "Bearer " + token
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
    return response
}, error => {
    // if (error && error.response) {
    //     switch (error.response.status) {
    //         case 500:
    //             error.message = "请求失败"
    //             break;
    //         case 401:
    //             router.replace('/')
    //             localStorage.clear()
    //             error.message = "token已过期,请重新登录"
    //             break
    //     }
    // }
    return Promise.reject(error)
})

export default service