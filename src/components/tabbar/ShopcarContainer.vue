<template>
  <div class="shopcar_container">
    <!-- 购物车页面 -->
    <div class="goodlist">

      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <!-- 注意图片地址要属性绑定 -->
            <img src="item.thumb_path" alt="">

            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <!-- 将初始话的数量值传过去 -->
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <!-- 这里的i是用来删除goodslist 中的数据的，而item.id 是来删除store中的数据的 -->
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>

					</div>
				</div>
			</div>
     </div> 



      <!-- 商品结算区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
              <div class="left">
                <p>总计(不含运费)</p>
                <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总计<span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span> 元</p>
              </div>
              <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>

       <p>{{$store.getters.getGoodsSelected}}</p>

     </div> 

  
 
</template>

<script>

import {Toast} from 'mint-ui'
// 导入组建
import numbox from "../subcomponents/shopcar_numbox.vue"

export default{
  data() {
    return {
        goodslist:[]  //购物车中所有商品的数据
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList(){  //获取购物车商品列表
        // 1获取到store中所有商品的id拼接出一个字符串
        var idArr = [];
        this.$store.state.car.forEach(item=>idArr.push(item.id));
        // 如果购物车中没商品则直接返回
        if(idArr.length<=0){
          return;
        }
        this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
          if(result.body.status === 0){
            this.goodslist = result.body.message;
          }else{
            Toast('获取失败')
          }
        })
    },
    remove(id,index){  //删除的方法
      // 点击删除，把商品从store 重传递的id对应的商品删除，同时把组件中goodlist中对应的那个要删除的商品使用index来删除
      this.goodslist.splice(index,1);
      // 删除store的数据要调用mulition来删除
      // 通过调用mulition中的方法
      this.$store.commit('removeFormCar',id)

    },
    selectedChanged(id,val){
        // 每当点击开关，把最新的开关状态，同步到store中
        console.log(id + "----" + val)
        this.$store.commit('updateGoodsSelected',{id,selected:val});
    }
  },
  components:{
    numbox
  }
}

</script>

<style lang="scss" scoped>

.shopcar_container{
  background-color: #eee;
  overflow: hidden;
  .goodlist{
    .mui-card-content-inner{
      display: flex;
      align-items: center;
    }
      img{
        width: 60px;
        height: 60px;
      }
      h1{
        font-size: 14px;
      }
      .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .price{
          color: red;
          font-weight: bold;
        }
      }
  }
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}




</style>