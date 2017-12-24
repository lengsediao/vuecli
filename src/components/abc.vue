<template>
  <div class="grid">
    <h3>{{msg}}</h3>
    <router-view></router-view>
    <router-link to="/Abc/red">红色</router-link>
    <router-link :to="{path:url}">绿色</router-link>
    <router-link to="/Abc/yellow">黄色</router-link>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        url:'/Abc/green',
          msg: "我是智者"
      }
    }
  }
</script>
<style>
.grid{
  color: #f00;
}
</style>
