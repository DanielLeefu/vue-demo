<template>


      <!-- 用mui中的插件num_box -->
      <!-- 父组件传来的值，我们不知道什么时候可以拿到，因为是异步的，但是总归有一刻会拿到真正的max值 -->
      <!-- 我们可以使用watch来监听，来监听父组件传过来的max值。不管watch会被触发几次，但是最后一次肯定是一个合法的max数值 -->
      <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='99' style="height:25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	  </div>


</template>

<script>

// 导入mui的js
import mui from '../../lib/mui/js/mui.js'

export default {
    mounted() {
        // 初始化，解决只有刷新才能点击的bug
        mui('.mui-numbox').numbox()
        // 输出父组件传过来的值
        console.log(this.max)
    },
    methods: {
        countChanged(){
            // 数量改变了
            console.log(this.$refs.numbox.value);
            // 每当数量值改变，则立即把最新的购物车数量同步到store中覆盖之前的数量值
            this.$store.commit("updateGoodsInfo",{
                id:this.goodsid,
                count:this.$refs.numbox.value
            });
        }
       
    },
     props:['initcount','goodsid']
}
</script>

<style lang="scss" scoped>

</style>