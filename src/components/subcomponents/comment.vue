<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要bb的内容（不超过120字）" maxlength="120"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i++}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content ==="undefined"  ? '此用户太懒了啥也没说' : item.content}}
                </div>
            </div>
            
        </div>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>

  </div>
</template>

<script>

import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            pageIndex:1, //展示第一页数据
            comments:[] //所有的评论数据
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments(){ //获取评论
            this.$http.get("api/getcomments/" + this.id + "?pageindex="+this.pageIndex).then(result =>{
                if(result.body.status === 0){
                    // 每当获取数据的时候。不把老数据清空覆盖而是以老数据拼接新数据
                    this.comments = this.comments.concat(result.body.message);
                    console.log(this.comments)
                }else{
                    Toast('获取数据失败')
                }
            })
        },
        getMore(){//加载更多
            this.pageIndex++;
            this.getComments()
        }
    },
    // 父组件向子组件传参
    props:['id']
}
</script>

<style lang="scss" scope>
    .cmt-container{
      h3{
          font-size: 18px;
      }  
      textarea{
          font-size: 14px;
          height: 85px;
          margin: 0;
      }
      .cmt-list{
          margin: 10px 0;
          .cmt-item{
              font-size: 13px;
              .cmt-title{
                  line-height: 30px;
                  background: #ccc;
              }
              .cmt-body{
                  line-height: 35px;
                    text-indent: 2em;
              }
          }
      }
    }

</style>