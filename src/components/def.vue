<template>
  <div class="red">
    <h3 :style="{color:titColor}">{{msg}}</h3>
  </div>
</template>
<script>
  export default{
  created(){
    this.titColor=this.$route.query.color;
  },
    data(){
      return{
          msg: "微笑的力量",
          titColor:''
      }
    }
  }
</script>
<style>
.red{
  color: #00f;
}
</style>
