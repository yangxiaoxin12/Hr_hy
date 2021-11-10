// 1.引入vue
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //使用vuex
const store = new Vuex.Store({
        state: {
            userInfo: null,
            tellData: null,
            getname:""

        }, //state
        getters: { ////类似于vue的computed
            tellData: (state) => {
                return state.tellData;
            },
            userInfoData: (state) => {
                return state.userInfo;
            }
        },
        mutations: { ////上面定义的state对象
            getTellData(state, obj) {
                state.tellData = obj;
            }, //getTellData
            getUserInfoData(state, obj) {
                state.userInfo = obj;
            },
            getname(state,name){
                state.getname = name;
            }

        }, //mutations
        // 在actions中提交mutation再去修改状态值接下来我们修改index.js文件，先定义actions提交mutation的函数
        actions: { //注册action，vue的mothods
            saveGetTellData(context, obj) {
                context.commit('getTellData', obj);
            },
            saveGetUserInfoData(context, obj) {
                context.commit('getUserInfoData', obj);
            }
        }
    }) //store
export default store //导出store