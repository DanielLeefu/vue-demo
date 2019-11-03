<template>
  <div>
      <!-- 新闻列表 -->
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key=
                "item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time | dataFormat}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>

// 导入弹框
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            newList:[]
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList(){ //获取新闻列表
            this.$http.get('api/getnewslist').then(result => {
                if(result.body.status === 0){
                    this.newList = result.body.message;
                    console.log('获取数据成功')
                }else{
                    //失败
                    Toast('获取新闻列表数据失败') 

                }
            })
        }   
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size:14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #222faf;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>