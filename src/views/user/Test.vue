<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="test">map测试打印</h2>
    <h2 @click="test2">List转化map</h2>
    <h2 @click="test3">set打印</h2>
    <h2 @click="test4">set去重打印</h2>
    <h2 @click="test5">对象</h2>
    <h2 @click="test6">数组</h2>
    <h2 @click="test7">map打印</h2>
    <h2 @click="test8">箭头函数</h2>
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
      },
      test5() {
        const person ={age:"12",name:"沈瑶"};
        console.log(person.age);
        console.log(person);
      },
      test6(){
        let list = Array.of(12,123,32,123);
        console.log(list);
      },
      test7(){
        let map = new Map();
        map.set("1","之一");
        map.set("2","之二");
        for (var i of map.keys()) {
          console.log(i);
          console.log(map.get(i));
        };
        map.forEach(function ( val,key) {
          console.log(key+" : " + val);
        });
      },
      test8(){
        var f = (a,b) => a+b;
        var ff = (a,b)=>{
          return a*b;
        };

        var s = f(2,4);
        console.log(s);
        console.log(ff(2,4));
      }
    }
  }
</script>

<style scoped>

</style>
