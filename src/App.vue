<template>
  <div class="app-container">
   
    <!-- 顶部header区域 -->
    <mt-header fixed title="李思远Vue-项目"></mt-header>

    <!-- 中间的路由router-view 区域 -->


    <!-- 底部的tab-bar区域 -->
    <!-- 利用mui的tab-bar -->
  <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>






    <h1>123</h1>

  </div>
</template>

<script>
 
</script>


<style lang="scss" scoped>
// 这是设置局部样式，lang 代表语言，scoped代表局部生效
 .app-container{
   padding-top: 40px;
 }
</style>


