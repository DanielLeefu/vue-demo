<template>
  <div class="goods-list">
      
      <div class="goods-item">
          <img src="https://res.bestcake.com/m-images/ww/ns/一见倾心.jpg?v=21" alt="">
          <h1 class="title">小米 小米MI9 为发烧而生啊</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199</span>
                  <span class="old">￥2199</span>
                  
              </p>
              <p class="sell">
                  <span>热卖中</span>
                   <span><img class="gouwuche" src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" alt=""></span>
                  <span>剩60件</span>
                 
              </p>
          </div>
      </div>
       <div class="goods-item">
          <img src="https://res.bestcake.com/m-images/ww/ns/一见倾心.jpg?v=21" alt="">
          <h1 class="title">小米 小米MI9 为发烧而生啊</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199</span>
                  <span class="old">￥2199</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
                  <!-- <span><img src="https://res.bestcake.com\m-images-2\list-cart.png?v=1" alt=""></span> -->
              </p>
          </div>
      </div>
       <div class="goods-item">
          <img src="https://res.bestcake.com/m-images/ww/ns/一见倾心.jpg?v=21" alt="">
          <h1 class="title">小米 小米MI9 为发烧而生</h1>
          <div class="info">
              <p class="price">
                  <span class="now">￥3199</span>
                  <span class="old">￥2199</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩60件</span>
                 
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

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
