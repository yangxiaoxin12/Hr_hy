// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// a modern alternative to CSS resets
import 'normalize.css/normalize.css'
import './assets/css/votingDvetails.css'
import 'lib-flexible/flexible'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
//引入vuex
import store from './store/store'

import router from './router'
import echarts from 'echarts'
import './icons'
import api from "./utils/api";
import http from "./utils/http";

// 引入axios
import axios from 'axios'
import qs from 'qs'
import HappyScroll from 'vue-happy-scroll'
import 'vue-happy-scroll/docs/happy-scroll.css'
//引入vuescroll
import vuescroll from 'vuescroll';
import Echarts from 'echarts'
Vue.prototype.$echarts = Echarts
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;
Vue.use(Echarts)
Vue.use(vuescroll); // install the vuescroll first
//将axios挂载到原型上
Vue.prototype.$vuescrollConfig = {
    bar: {
        background: '#000'
    }
};


// 将axios挂载到原型上
Vue.prototype.axios = axios



//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象

Vue.prototype.$qs = qs
//定义全局变量
// Vue.prototype.$post = post;
// Vue.prototype.$get = get;

Vue.prototype.$echarts = echarts

// 注册element-UI
Vue.use(ElementUI)
Vue.use(HappyScroll)
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})