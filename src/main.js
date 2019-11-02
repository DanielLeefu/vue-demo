// js入口文件
import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from "vue-router"
// 1.2安装路由
Vue.use(VueRouter)

// 导入mui的css文件
import './lib/mui/css/mui.css'

// 导入扩展图标的css文件
import './lib/mui/css/icons-extra.css'


// 按需导入mint-ui的组件 
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 1.3导入自己的router,js 模块
import router from './router.js'


// 导入App根组件
import app from './App.vue'

// 创建vm实例
var vm = new Vue({
  el: "#app",
  // render函数渲染
  render: c => c(app),
  router   //挂载路由
  
})