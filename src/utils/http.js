import axios from 'axios'
import BASE_URL from '../config/interface'
let prefix = '/SX_activitycenter';
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {

    sessionStorage.setItem('BASE_URL', BASE_URL)

} else {
    const url = `${prefix}`;
    console.log(url);
    sessionStorage.setItem('BASE_URL', url);
}
const baseUrl = sessionStorage.getItem('BASE_URL');
console.log(window.location.href);




const service = axios.create({

        baseURL: baseUrl,

        timeout: 8000 // request timeout
    })
    // 请求拦截
service.interceptors.request.use(
        config => {
            console.log(`${config.method.toUpperCase()} resuest send to ${config.url} at ${new Date().getTime()}`)
            return config
        },
        error => {
            console.log(err)
            return Promise.reject(error)
        }
    )
    // 拦截响应
service.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})
export default service