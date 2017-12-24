/**
 * Created by liusir-pc on 2017/12/24.
 */
import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/goodList'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'GoodList',
      component:GoodList
    }
  ]
})
