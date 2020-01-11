import Vue from 'vue';
import Vuex from 'vuex';

//1.安装插件
Vue.use(Vuex);
//抽离下面的a:moduleA
const moduleA = {
  state:{
    name:'Miles'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  action:{

  },
  getters:{

  }
};


//创建对象
const store = new Vuex.Store({
//  这里面有几个固定的东西


  state:{
    counter:100,
    students:[
      {id:211,name:'Apple',favourite:'movie'},
      {id:312,name:'Banana',favourite:'music'},
      {id:233,name:'orange',favourite:'coding'},
      {id:314,name:'pear',favourite:'art'},
      {id:215,name:'blueberry',favourite:'read'},
    ]
  },
  mutations:{
  //  定义方法
  //  我们想对上面state进行修改都是通过mutation 来修改的。
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions:{

  },
  getters:{
    powerCounter(state){
      return state.counter*state.counter
    },
    more20stu(state){
      //保留大于300的数据，小于300的过滤掉
      return state.students.filter( n =>{
        return n.id >300
      })
    }
  },
  //modules里面的state    ,最终会被放置在store里面的state
  modules:{
        //可以将上面的东西进行嵌套
        a:moduleA,


        b:{
        //  ...
        },
        c:{
        //  ...
        }
  }
});

//导出store
export default store