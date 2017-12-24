<template>
  <div class="orgin">
      <h2 :style="{color:titClass}">{{msg}}</h2>

  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route.params);
    this.titClass=this.$route.params.color;
  },
  data:function(){
    return {
        url:'orange/green',
        msg:"qwerrrrrrrr",
        titClass: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orgin{
  color: #ff0;
}
</style>
