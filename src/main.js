// 入口文件
import Vue from 'vue'

// 导入mui的css文件
import './lib/mui/css/mui.css'



// 按需导入mint-ui的组件 
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

// 导入App根组件
import app from './App.vue'

// 创建vm实例
var vm = new Vue({
  el: "#app",
  // render函数渲染
  render: c => c(app)
  
})