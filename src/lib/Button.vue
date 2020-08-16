<template>

  <!-- :class="[`theme-${theme}`]: theme" -->
  <div>
    <button
      class="gulu-button"
      :class="{[`gulu-theme-${theme}`]: theme}"
    >
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
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
  setup(props, context) {},
};
</script>

<style lang="scss" scoped>
div {
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .gulu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.gulu-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.gulu-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }
  }
}
</style>