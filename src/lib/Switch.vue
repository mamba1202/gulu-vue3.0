<template>
  <button
    :class="{checked:value}"
    @click="toggle"
  ><span></span></button>
  <div>{{value}}</div>
</template>

<script>
import { ref } from "vue";
export default {
    props:{
        value: Boolean
    },
  setup(props,context) {
    const checked = ref(false);
    const toggle = () => {
        // checked.value  = !checked.value
        context.emit('input', !props.value)
        //this.$emit()
    };
    return { checked, toggle };
    // toggle不导出模板无法使用
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2/2;
  transition: left 300ms;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}

button:focus{
    outline: none;
}
</style>
