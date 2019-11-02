<template>
<!-- 组件入口 -->
  <div class="app-container">
   
    <!-- 顶部header区域 -->
    <mt-header fixed title="李思远Vue-项目" class="mystyle_header"></mt-header>

    <!-- 中间的路由router-view 区域 -->
		<router-view></router-view>

    <!-- 底部的tab-bar区域 -->
    <!-- 利用mui的tab-bar -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>



  </div>
</template>

<script>
 
</script>


<style lang="scss" scoped>
// 这是设置局部样式，lang 代表语言，scoped代表局部生效
 .app-container{
   padding-top: 40px;
 }
 .myicon-active{ //自己定义的点击路由变色的类
	 color:red
 }
 .mystyle_header{ //自己定义的头部header的类
	 background: red 
 }


 
</style>


