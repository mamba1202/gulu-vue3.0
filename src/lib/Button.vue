<template>
  <div :size="size">
    <!-- <button v-bind="$attrs"> -->
    <button v-bind="rest">
      <slot />
    </button>
  </div>

</template>
<script lang="ts">
// 属性绑定
//默认所有的属性都绑定到根元素
//使用inheritAttrs： false 可以取消默认绑定
//使用$attrs或者context.attrs获取所有属性
//使用v-bind="$attrs" 批量绑定属性
//使用const{size, level,...rest} = context.attrs 将属性分开

// props VS attrs
// props要先声明才能取值， attrs 不用先声明
// props不包含事件， attrs包含
// props 没有声明的属性会跑到attrs里
// props 支持string以外的类型， atrrs只有string类型
export default {
  inheritAttrs: false, //不让其有继承属性
  props:{
      size: String
  },
  setup(props, context) {
      console.log({...props})
      console.log({...context.attrs})

    const { size, ...rest } = context.attrs;
    return {size, rest}
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>