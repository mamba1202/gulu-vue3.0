<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav">
    <div class="gulu-tabs-nav-item" 
    :class="{selected: t==selected}"
    v-for="(t,index) in titles" :key="index">{{t}}</div>
  </div>
  <div class="gulu-tabs-content">
    <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>

<script>
import Tab from './Tab.vue'
export default {
    props:{
       selected: {
          type: String,
     }
    },
    setup(props,context){
    console.log({...context.slots.default()})
    const defaults  = context.slots.default()

    defaults.forEach((tag)=>{
        if(tag.type!=Tab){
            throw new Error('Tabs 子标签必须是 Tab')
        }
        console.log(tag)
    })

    const titles  = defaults.map((tag)=>{
        return tag.props.title
    })

    return{
        defaults,
        titles
    }

    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>