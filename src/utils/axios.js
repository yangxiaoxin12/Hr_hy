
import axios from "axios";
//1.引入vue
import Vue from 'vue';
import router from "../router";
//2.新创建一个vue实例
var v = new Vue();
// 请求拦截  所有的请求添加token
// 响应拦截
axios.interceptors.response.use(
    response => {
        // 请求成功
        // 1. 根据自己项目需求定制自己的拦截
        // 2. 然后返回数据
        return response.data;
    },
    error => {
        // 请求失败
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    // 对400错误您的处理
                    v.$message({
                        message: "错误请求",
                        type: "error",
                    });
                    break;
                case 401:
                    // 对 403 错误进行处理
                    console.log("token已过期");
                    break;
                case 403:
                    // 对 403 错误进行处理
                    console.log("拒绝访问");
                    break;
                case 404:
                    // 对 404 错误进行处理
                    v.$message({
                        message: "请求错误,未找到该资源",
                        type: "error",
                    });
                    break;
                case 500:
                    v.$message({
                        message: "服务器端出错",
                        type: "error",
                    });
                    // 对 500 错误进行处理
                    break;
                case 502:
                    // 对 502 错误进行处理
                    console.log("网络错误");
                    break;
                case 503:
                    // 对 503 错误进行处理
                    console.log("服务不可用");
                    break;
                case 504:
                    // 对 504 错误进行处理
                    console.log("网络超时");
                    break;
                default:
                    // 如果以上都不是的处理
                    return Promise.reject(error);
            }
        } else {
            v.$message({
                message: "连接到服务器失败,请检查网络环境",
                type: "error",
            });
            // this.$message({
            //     message: "连接到服务器失败",
            //     type: "error",
            // });
        }
    }
);