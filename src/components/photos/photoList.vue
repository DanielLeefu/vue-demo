<template>
  <div>
     <!-- 顶部滑动条 -->
     <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

	</div>

	<!-- 图片列表区域 -->
	<!-- 图片懒加载 -->
	<ul class="photo-list">
	<router-link v-for="item in list" :key = "item.id" :to="'/home/photoinfo/'+item.id" tag="li">
		<img v-lazy="item.img_url">
		<div class="info">
			<h1 class="info-title">{{item.title}}</h1>
			<div class="info-body">{{item.zhaiyao}}</div>
		</div>
	</router-link>
	</ul>



  </div>
</template>

<script>


// 导入MUI 让顶部导航栏滑动
import mui from '../../lib/mui/js/mui.js'
import {Toast} from 'mint-ui'

export default {
	data() {
		return {
			cates:[],  //所有分类的列表
			list:[] //图片列表的数组
		}
	},
	created() {
		this.getAllCategory()
		// 默认进入页面就请求所有图片列表
		this.getPhotoListByCateId(0)
	},
	mounted() {  //组件中的dom结构被渲染好并放到页面上
	// 如果要操作元素，最好在mounted中，因为这时候元素是最新的
		// 初始化mui的滚动条
		mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});

	},
	methods: {
		getAllCategory(){ //获取所有的图片分类
			this.$http.get('api/getimgcategory').then(result=>{
				if(result.body.status === 0 ){
					// 手动拼接出全部的这个分类
				result.body.message.unshift({title:"全部",id:0})
				this.cates = result.body.message;
				}else{
					Toast('获取数据失败')
				}
			})
		},
		getPhotoListByCateId(cateId){ //根据分类id获取图片列表
			this.$http.get('api/getimages/'+ cateId).then(result=>{
				if(result.body.status === 0){
					this.list = result.body.message;
				}
			})
		}
	},
	}


</script>

<style lang="scss" scoped>

/* 清除滑动报错信息 */
	*{
		touch-action: pan-y;
	}

.photo-list {
	margin: 0;
	padding: 10px;
	list-style: none;
	padding-bottom: 0;
	li{
		/* 图片懒加载的样式 */
		background:#ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		position: relative;
		img{
			width: 100%;
			display: block;
		}
		
	img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}

	}
}

.info{
	color: white;
	text-align: left;
	position: absolute;
	bottom: 0;
	background-color: rgba(0,0,0,0.4);
	max-height:84px;
	.info-title{
		font-size: 14px;
	}
	.info-body{
		font-size: 13px;
	}
}

</style>