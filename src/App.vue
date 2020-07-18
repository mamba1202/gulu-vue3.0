<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <span>count 为{{count}}</span>
  <br/>
  <span>object: {{object.n}}</span>
   <br/>
  <button @click="add">+1</button>
  <hr/>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  setup(){

    //ref 盒子 用value  基本类型
    //reactive 代理 object是{{n: 100}}代理人  复杂类型
    const count  = ref(0)
    const object = reactive({n: 100})


    setTimeout(()=>{
      count.value +=100
      object.n += 1000
    },3000)


// 如果return  this访问不到
    return{
      count,
      object
    }
  },

  methods:{
    add(){
      this.count += 1
      this.object.n += 1
    }
  }

}
</script>
