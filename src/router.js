// 路由入口
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置路由规则的
    { path: '/home', component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer}
    
  ],
  linkActiveClass:'myicon-active'  //自己定义的路由变色的类
})

// 把路由对象暴露出去
export default router