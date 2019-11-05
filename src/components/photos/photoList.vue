<template>
  <div>
     
     <!-- 顶部滑动条 -->
     <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							斗图
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							新闻
						</a>
					</div>
				</div>

			</div>

  </div>
</template>

<script>

// 导入MUI 让顶部导航栏滑动
import mui from '../../lib/mui/js/mui.js'


export default {
	data() {
		return {
			
		}
	},
	mounted() {  //组件中的dom结构被渲染好并放到页面上
	// 如果要操作元素，最好在mounted中，因为这时候元素是最新的
		// 初始化mui的滚动条
		mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});

	},
	methods: {
		
	},
}
</script>

<style>

/* 清除滑动报错信息 */
	*{
		touch-action: pan-y;
	}
</style>