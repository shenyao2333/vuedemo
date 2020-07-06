<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="test">map测试打印</h2>
    <h2 @click="test2">List转化map</h2>
    <h2 @click="test3">set打印</h2>
    <h2 @click="test4">set去重打印</h2>
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
        var map = new Map();
        map.set(1,"你好");
        map.set(2,"他好");
        for (var[key,val] of map){
          console.log(key + "--->"+ val);
        }
      },
      test2(){
        var list = [["key1", "value1"], ["key2", "value2"]];
        var map = new Map(list);
        map.forEach(function (value, key) {
          console.log(key + " = " + value);
        },map);
      },
      test3(){
        var set = new Set(["12","13","14"]);
        for (var a of set){
          console.log(a);
        }
      },
      test4(){
        var mySet = new Set([1, 2, 3, 4, 4]);
        for (var a of mySet){
          console.log(a);
        }
      }
    }
  }
</script>

<style scoped>

</style>
