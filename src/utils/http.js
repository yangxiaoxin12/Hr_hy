
import axios from "axios";
axios.defaults.timeout = 15000; // 请求超时
axios.defaults.baseURL = "population/api"; // 增加请求默认路径前缀
let protocol = window.location.protocol; //协议
let host = window.location.host; //主机
let reg = /^localhost+/;
if (reg.test(host)) {
    //若本地项目调试使用
    axios.defaults.baseURL = '192.168.120.14:8080';
} else {
    //动态请求地址             协议               主机
    axios.defaults.baseURL = '192.168.120.14:8080';
}
export default {
    /**
     * get 请求
     * @param url 接口路由
     * @returns {AxiosPromise<any>}
     */
    get(url, params, headers) {
        let options = {};
        if (params) {
            options.params = params;
        }
        if (headers) {
            options.headers = headers;
        }
        return axios.get(url, options);
    },

    /**
     * post 请求
     *
     * @param url 接口路由
     * @param params 接口参数
     * @returns {AxiosPromise<any>}
     */
    post(url, data, headers) {
        let options = {};
        if (headers) {
            options.headers = headers;
        }
        return axios.post(url, data, options);
    },


    /**
    * delete 请求
    *
    * @param url 接口路由
    * @param params 接口参数
    * @returns {AxiosPromise<any>}
    */
    delete(url, data, headers) {
        let options = {};
        if (headers) {
            options.headers = headers;
        }
        return axios.delete(url, data, options);
    },

    /**
    * delete 请求
    *
    * @param url 接口路由
    * @param params 接口参数
    * @returns {AxiosPromise<any>}
    */
    put(url, data, headers) {
        let options = {};
        if (headers) {
            options.headers = headers;
        }
        return axios.put(url, data, options);
    }
};