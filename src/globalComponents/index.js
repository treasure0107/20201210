/*
 * @Author: your name
 * @Description: 全局组件
 * @FilePath: \project\src\globalComponents\index.js
 */
import Vue from 'vue'
import AccountLogin from '../components/AccountLogin.vue'
import PhoneLogin from '../components/PhoneLogin.vue'

Vue.component('accountLogin', AccountLogin)
Vue.component('phoneLogin', PhoneLogin)