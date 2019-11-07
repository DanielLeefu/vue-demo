<template>


      <!-- 用mui中的插件num_box -->
      <!-- 父组件传来的值，我们不知道什么时候可以拿到，因为是异步的，但是总归有一刻会拿到真正的max值 -->
      <!-- 我们可以使用watch来监听，来监听父组件传过来的max值。不管watch会被触发几次，但是最后一次肯定是一个合法的max数值 -->
      <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
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
            // 每当文本框数据被修改的时候，立即把最新的数据通过事件调用传递给父组件
            // console.log(this.$refs.numbox.value);   把这个值发送给父组件
            // getcount 是父组件的绑定的事件名
            this.$emit('getcount',parseInt(this.$refs.numbox.value))

        }
    },
    // 接收父组件传过来的最大可加入购物车的最大值（库存值）然后将max通过属性绑定交给 ( :data-numbox-max='max')
    props:["max"],
    watch:{
        //属性监听  只要max值改变，立马设为最大值
        'max': function(newVal,oldVal){
            // 使用js api 设置max的最大值，mui官网 numbox组件
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>