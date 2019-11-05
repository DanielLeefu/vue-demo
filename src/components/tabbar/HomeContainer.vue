<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 利用v-for渲染获取回来的轮播图数据也就是lunbotuList -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <!-- 注意，src属性要用v-bind绑定  img 也要设置样式-->
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 从九宫格布局到6宫格的改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
                     <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                     <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 




      
    </div>
</template>

<script>

// 引入mint-ui的弹框
import {Toast} from 'mint-ui'


  export default{
      data(){
          return {
              lunbotuList:[]  //保存轮播图的数组
          }
      },
      created() {
          this.getLunbotu();
      },
      methods: {
          getLunbotu(){ //获取轮播图数据的方法http://www.liulongbin.top:3005接口地址
                this.$http.get('api/getlunbo').then(result =>{
                    // console.log(result.body);判断获取数据成功还是失败
                    if (result.body.status === 0){
                        // 成功
                        this.lunbotuList = result.body.message;
                    }else{
                        // 失败了提醒用户获取失败，利用mint-ui的弹框
                        Toast('加载轮播图失败')
                    }
                })
          }

       
      }
  }
</script>

<style lang="scss" scoped>
    // 设置轮播图的高
    .mint-swipe{
        height: 200px;
        // 设置背景颜色
        .mint-swipe-item{
            &:nth-child(1){
                background-color: chocolate;
            }
            
            &:nth-child(2){
                background-color: green;
            }
            
            &:nth-child(3){
                background-color: goldenrod;
            }
        }
        // 设置轮播图的图片
        img{
            width: 100%;
            height: 100%;
        }
    }

.mui-grid-view.mui-grid-9{  //设置六宫格的背景
    background: #fff;
    .mui-table-view-cell{
        border: 0;
        img{
            width: 60px;
            height: 60px;
        }
    }
    .mui-media-body{
        font-size: 14px;
    }
}


</style>