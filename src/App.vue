<template>
<!-- 组件入口 -->
  <div class="app-container">
   
    <!-- 顶部header区域 -->
    <mt-header fixed title="李思远Vue-项目" class="mystyle_header">
			<!-- 返回按钮 -->
		 <span slot="left" @click="goBack" class="backbutton" v-show="flag">
			<mt-button icon="back">返回</mt-button>
		</span>
	</mt-header>

	
	
    <!-- 中间的路由router-view 区域 -->
	<!-- 加动画 -->
	<transition>
			<router-view></router-view>
	</transition>
	

    <!-- 底部的tab-bar区域 -->
    <!-- 利用mui的tab-bar -->
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemlsy" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemlsy" to="/member">
				<span class="mui-icon mui-icon-extra mui-icon-extra-share"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-itemlsy" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{this.$store.getters.getAllCount}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemlsy" to="/search">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>



  </div>
</template>

<script>
 export default {
	 data() {
		 return {
			 flag: false
		 }
	 },
	 methods: {
		goBack(){
			this.$router.go(-1)
		}	 
	 },
	 created() {
		 this.flag = this.$route.path === '/home' ? false : true;
	 },
	 watch:{
		 '$route.path':function(newVal){
			 if(newVal === '/home'){
				 this.flag = false;
			 }else{
				 this.flag = true;
			 }
		 }
	 }
 }
</script>


<style lang="scss" scoped>

// 提升图片导航的层级
.mint-header{
	z-index: 99;
}

// 这是设置局部样式，lang 代表语言，scoped代表局部生效
 .app-container{
   padding-top: 40px;
   padding-bottom: 52px;
	//隐藏动画切换的滚动条
   overflow-x: hidden;
   position: relative;
 }
 .myicon-active{ //自己定义的点击路由变色的类
	 color:red!important  //这里会导致滑动条一上来不能正常工作
 }
 .mystyle_header{ //自己定义的头部header的类
	 background: red 
	
 }

.v-enter{
	opacity:0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity:0;
	transform: translateX(-100%);
	// 解决往上飘的问题
	position: absolute;
	
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease 
}
 
//  改类名来实现改滑动无法点击的bug
.mui-bar-tab .mui-tab-itemlsy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-itemlsy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-itemlsy .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
// 头部返回按钮样式

 .backbutton{
		 color:white
	 }
</style>


