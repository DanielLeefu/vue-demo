<template>


      <!-- 用mui中的插件num_box -->
      <div class="mui-numbox" data-numbox-min='1' data-numbox-max='99'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" />
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
    },
}
</script>

<style lang="scss" scoped>

</style>