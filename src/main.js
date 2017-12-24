// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueLazyload from 'vue-lazyload'
//import Hello from './components/HelloWorld'
import router from './router'

Vue.config.productionTip = true
Vue.use(vueLazyload,{
  loading:'/static/loading-svg/loading-bars.svg'
});

/* eslint-disable no-new */
var strr = new Vue({
  el: '#app',
  //添加router
  router,
  template: '<App/>',
  components: { App }
})
