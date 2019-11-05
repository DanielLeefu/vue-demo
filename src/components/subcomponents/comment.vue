<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要bb的内容（不超过120字）" maxlength="120" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
         第{{++i}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat}}
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
            comments:[], //所有的评论数据
            msg:""
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
        },
        postComment(){ //发表评论
            // 判断输入是否为空
            if(this.msg.trim().length === 0 ){
                return Toast('你没有输入任何内容')
            }
            // post请求参数 参数一 ：请求的url地址
                        // 参数二：提交给服务器的数据对象{content:this.msg}注意content是api规定死的
                        // 参数三：定义提交的时候，表单中数据的格式{emulateJSON:true}
                        // 这里post传两个参数是应为第三个参数在全局配置了
            this.$http.post('api/postcomment/' + this.$route.params.id,{content:this.msg.trim()}).then(function(result){
                if(result.body.status === 0 ){
                    // 拼接出一个新的评论对象
                    var cmt = {
                        user_name:"匿名用户",
                        add_time:Date.now(),
                        content:this.msg.trim()
                    };
                    this.comments.unshift(cmt);
                    //清空msg
                    this.msg = "";
                }else{
                    Toast('获取数据失败')
                }
            })
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