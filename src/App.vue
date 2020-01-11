<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h1>{{$store.state.counter}}</h1>
    <hr>
    <h3>{{counter}}</h3>
    <hr>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hello-vuex/>
    <h2>--------------App内容：getters相关信息--------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>------------module:相关的部分---------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  data(){
    return {
      message:'我是App组件',
    }
  },
  components:{
    HelloVuex
  },
  methods:{
    add(){
      //必须要使用这个commit这个方法进行提交
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    updateName(){
      this.$store.commit('updateName','Ignace')
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
