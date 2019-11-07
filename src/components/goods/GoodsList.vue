<template>

    

  <div class="goods-list">
      
      <!-- 以前的路由方法 -->
      <!-- <router-link tag="div" class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id">
          <img :src="item.img_url" alt="">
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">{{item.sell_price}}</span>
                  <span class="old">{{item.market_price}}</span>
                  
              </p>
              <p class="sell">
                  <span>热卖中</span>
                   <span><img class="gouwuche" src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" alt=""></span>
                  <span>剩{{item.stock_quantity}}件</span>
                 
              </p>
          </div>
      </router-link> -->
    
        <!-- 新方法 -->

        <div tag="div" class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
          <img :src="item.img_url" alt="">
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">{{item.sell_price}}</span>
                  <span class="old">{{item.market_price}}</span>
                  
              </p>
              <p class="sell">
                  <span>热卖中</span>
                   <span><img class="gouwuche" src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" alt=""></span>
                  <span>剩{{item.stock_quantity}}件</span>
                 
              </p>
          </div>
      </div>


      
      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>

import {Toast} from 'mint-ui'

export default {
    data() { //data是往自己组件内部，挂载一些私有数据的
        return {
            goodslist:[], //存放商品列表的数组
            pageindex:1   //分页的页数
        }
    },
    created() {
        this.getGoodsList();
    },
    methods: {
        getGoodsList(){ // 获取商品列表、
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                if(result.body.status === 0){
                    // this.goodslist = result.body.message;
                    console.log(result.body.message);
                    if(result.body.message.length=== 0){
                        Toast('没有更多的数据了')
                    } 
                    this.goodslist = this.goodslist.concat(result.body.message)
                }
            })
        },
        getMore(){  //加载更多
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){ //方法二编程式跳转
                //使用js形式进行路由导航
                console.log(this);
                // this.$router.push("/home/goodsinfo/" + id) 
                // this.$router.push({path:"/home/goodsinfo/" + id})
                this.$router.push({ name : "goodsinfo",params : { id }}); 

        }
    },
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
     padding: 6px;
    justify-content: space-between;
   
    .goods-item{
        min-height: 295px;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        border: 1px solid #ccc;
         box-shadow: 0 0 8px #ccc;
         margin: 3px 0;
        width: 49%;
        padding: 2px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
       .info{
           background-color: #ddd;
           p{
               margin: 0;
               padding: 5px;
           }
            .price{
                
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size:12px;
                    margin-left:10px; 
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                .gouwuche{
                    margin-left: 60px;
                    width: 15px;
                    height: 15px;
                }
            }
       }
    }
}
</style>
