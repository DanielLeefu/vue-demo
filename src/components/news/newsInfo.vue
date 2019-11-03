<template>
  <div class="newinfo-container">
      <h2 class="title">{{ newsinfo.title }}</h2>
      <p class="subtitle">
          <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
          <span>点击{{ newsinfo.click }}次</span>
      </p>
      <hr>
      <div class="content" v-html="newsinfo.content"></div>
  </div>
</template>

<script>

import {Toast} from 'mint-ui'

export default {
    data() {
        return {
            id:this.$route.params.id, //将url的地址传递过来的id值，挂载到data上，方便以后调用
            newsinfo: {} //新闻对象
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
     getNewsInfo(){ //获取新闻详情
        this.$http.get("api/getnew/" + this.id).then(result => {
            if(result.body.status === 0){
                this.newsinfo = result.body.message[0];
                  
            }else{
                Toast('获取新闻详情失败')
            }
        })
     }   
    }
}

</script>

<style lang="scss">
// 为了让获取的图片正常显示，要注意scoped去除
.newinfo-container{
    padding: 0 4px;
    .title{
        font-size: 14px;
        text-align: center;
        margin:15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{}

}
</style>