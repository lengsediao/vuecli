<template>
  <div class="hello">
      <button @click="strAdd">+</button>
      <button @click="strjian">-</button><br/>
    <p>{{num}}</p>
  </div>
</template>

<script>
  export default {
    props:['num'],
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue'
      }
    },
    methods:{
      strAdd(){
        this.$emit('incre');
      },
      strjian(){
        this.$emit('dncre');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
