<template>
  <div class="yell">
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
  export default{
    created (){
      this.sss = this.$route.query.color
    },
    data(){
      return{
          msg: "我是智者",
        sss:''
      }
    }
  }
</script>
<style>
.yell{
  color: #ffff00;
}
</style>
