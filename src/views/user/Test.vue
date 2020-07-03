<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="test">点击事件</h2>
  </div>

</template>

<script>
  let a = 1;
  export default {
    name: 'Test',
    data () {
      return {
        msg: 'TestEs6!!!!'
      }
    },
    methods: {
      test () {
        console.log(a);
      }
    }
  }
</script>

<style scoped>

</style>
