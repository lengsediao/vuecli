<template>
  <div class="banana">
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
        msg:"我四级君"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banana{
  color: #f00;
}
</style>
