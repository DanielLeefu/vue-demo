<template>
  <div class="goodsinfo_container">

    <!-- 小球的动画 -->
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    >
        <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
   




    <!-- 利用mui  的cart 组件 -->

     <!-- 轮播图区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <swiper :lunbotuList="lubotu" :isfull="false"></swiper>
					</div>
				</div>
			</div>


     <!-- 商品购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p class="price">
              市场价：<del>￥{{goodsinfo.market_price}}</del> &nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsinfo.sell_price}}</span>
            </p>
            <p> 购买数量: <numbox></numbox> </p>
             
           
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>

            </p>
					</div>
				</div>
			  </div>


     <!-- 商品参数区域 -->
     	<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>商品货号：{{goodsinfo.goods_no}}</p>
            <p>库存情况：{{goodsinfo.stock_quantity}} 件</p>
            <p>上架时间：{{goodsinfo.add_time | dataFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <!-- 这里没有上下排列，证明父元素启用了flex布局需要解除-->
            <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>

        </div>
			</div>


  </div>
</template>

<script>

// 导入轮播图组件
import swiper from '../subcomponents/swiper.vue'

// 导入购物车数量按钮组件（numbox）
import numbox from '../subcomponents/goodsinfo_numbox.vue'

import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      id:this.$route.params.id, //将路由参数id获取挂载到data上 
      lubotu:[],  //放轮播图数据
      goodsinfo:{}, //获取到的商品的信息
      ballFlag:false //控制小球显示和隐藏的标识符
    }
  },
  created() {
    this.getLunbotu(),
    this.getGoodsinfo()
  },
  methods: {
    getLunbotu(){
      this.$http.get('api/getthumimages/'+ this.id).then(result=>{
        if(result.body.status === 0){
            // 先循环每一项，为item加item.img属性，因为轮播图中只认识item.img 不认识item.src属性
            result.body.message.forEach(item=>{
              item.img = item.src
            })
            this.lubotu = result.body.message;
        }
      })
    },
    getGoodsinfo(){ // 获取商品信息列表数据
        this.$http.get('api/goods/getinfo/'+ this.id).then(result=>{
          if(result.body.status === 0){
              this.goodsinfo = result.body.message[0];
          }else{
            Toast('获取数据失败')
          }
        })
    },
    goDesc(id){ //点击使用编程式路由跳转
        this.$router.push({name:"goodsdesc",params:{ id }});
    },
    goComment(id){//点击使用编程式路由跳转
        this.$router.push({name:"goodscomment",params:{ id }});
    },
    addToShopCar(){ //添加到购物车
        this.ballFlag = !this.ballFlag
    },
    beforeEnter(el){  //小球动画
      el.style.transform="translate(0,0)"; 
    },
    enter(el,done){
      el.offsetWidth;

      // 获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();


      el.style.transform="translate(93px,230px)"; 
      el.style.transition = "all 1s cubic-bezier(.17,.67,.23,.88) ";
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag;
    }
  },
  components:{
    swiper:swiper,
    numbox
  }
}
</script>

<style lang="scss" scoped>
  
.goodsinfo_container{
  background: #ddd;
  overflow: hidden;


.now_price{
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.mui-card-footer{
  // 解决图文介绍和商品评论不能上下排列父元素启用了flex布局
  display: block;
  button{
    margin: 15px 0;
  }
}

.ball{
  width: 15px;
  height: 15px;
  border-radius:50%; 
  background-color:red;
  position: absolute;
  z-index: 99;
  top: 390px;
  left: 146px;
}

}
</style>