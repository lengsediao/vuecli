<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class=" filterby stopPop" @click="getModelListShow">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter"  v-bind:class="{'filterby-show':modelListShow}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" v-bind:class="{'cur':burColor=='All'}" @click="burColor='All'">All</a></dd>
              <dd v-for="(item,index) in price">
                <a href="javascript:void(0)" :class="{'cur':burColor==index}" @click="getBurColor(index)">{{item.priceStart}} - {{item.priceEnd}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(vue,index) in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'./../../static/image/'+vue.prodcutImg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{vue.productName}}</div>
                    <div class="price">{{vue.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="modelShow" @click="getModelShow"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import './../assets/css/base.css'
  import './../assets/css/product.css'
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavBread from '@/components/NavBread'
  import axios from 'axios'
  export default {
    data(){
      return {
        goodsList:[],
        price:[
          {
            priceStart:0,
            priceEnd:100
          },
          {
            priceStart:100,
            priceEnd:500
          },
          {
            priceStart:500,
            priceEnd:1000
          },
          {
            priceStart:1000,
            priceEnd:1500
          }
        ],
        burColor:'All',
        modelShow:false,
        modelListShow:false
      }
    },
    components:{
      NavHeader,
      NavFooter,
      NavBread
    },
    mounted:function(){
      this.getGoodList();
    },
    methods:{
      getGoodList(){
        var _this =this;
        axios.get('/goods').then(function(res){
          var tes = res.data;
          _this.goodsList = tes.result;
        })
      },
      getModelListShow(){
        this.modelShow=true;
        this.modelListShow=true;
      },
      getBurColor(index){
        this.burColor=index;
        this.getModelShow()
      },
      getModelShow(){
        this.modelShow=false;
        this.modelListShow=false;
      }
    }
  }
</script>
