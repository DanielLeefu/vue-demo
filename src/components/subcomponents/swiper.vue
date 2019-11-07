<template>
  <div>

      <mt-swipe :auto="4000">
            <!-- 利用v-for渲染获取回来的轮播图数据也就是lunbotuList -->
            <!-- 谁使用这个组件，谁为我们传递 lunbotuList 的数据 -->
            <!-- 所以此时，应该是父组件向子组件传值来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <!-- 注意，src属性要用v-bind绑定  img 也要设置样式-->
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>

  </div>
</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>

<style lang = "scss" scoped>
 .mint-swipe{
        height: 200px;
      
        /* // 设置背景颜色 */
        .mint-swipe-item{
            /* 让图片居中 */
              text-align: center;
            /* &:nth-child(1){
                background-color: chocolate;
            }
            
            &:nth-child(2){
                background-color: green;
            }
            
            &:nth-child(3){
                background-color: goldenrod;
            } */
        }
        /* // 设置轮播图的图片 */
        img{
            /* width: 100%; */
            height: 100%;
        }
    }
    .full{
        width: 100%;
    }
</style>