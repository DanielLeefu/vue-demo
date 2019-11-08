// js入口文件
import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from "vue-router"
// 1.2安装路由
Vue.use(VueRouter)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: { //this.$store.state.***
    car:[] //将购物车的数据用一个数组存储起来
  },
  mutations: { //this.$store.commit('方法的名称'，'按需传递唯一的参数')
    addToCar(state,goodsinfo) {
        //点击加入购物车，把商品信息保存在store中的car上
      let flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
            item.count += parseInt(goodsinfo.count)
            flag = true
            return true //找到后终止some循环
          }
        })
      // 如果循环完毕还没有找到，就把商品数据直接push到car
      if (!flag) {
          state.car.push(goodsinfo)
        }
      
      }
  },
  getters: { //this.$store.getters.***
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
      } 
  }
})



// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  // moment()直接调用得到的是当前的时间，给定时间则传参数，直接传dataStr
  return moment(dataStr).format(pattern)
})


// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)
// 全局配置请求的路径接口
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置post时候表单格式组织形式
Vue.http.options.emulateJSON = true;



// 导入mui的css文件
import './lib/mui/css/mui.css'

// 导入扩展图标的css文件
import './lib/mui/css/icons-extra.css'


// // 按需导入mint-ui的组件 
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// // 按需配置轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// // 导入图片懒加载组件(按需导入图片懒加载出不来，要用懒加载只能全部导入)
// Vue.use(Lazyload);

// 全部导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 安装缩略图插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview)



// 1.3导入自己的router,js 模块
import router from './router.js'


// 导入App根组件
import app from './App.vue'

// 创建vm实例
var vm = new Vue({
  el: "#app",
  // render函数渲染
  render: c => c(app),
  router,   //挂载路由
  store
})