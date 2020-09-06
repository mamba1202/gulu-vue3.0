<template>
  <div class="gulu-tabs">
    <div
      class="gulu-tabs-nav"
      ref="container"
    >
      <div
        class="gulu-tabs-nav-item"
        @click="select(t)"
        :class="{selected: t==selected}"
        v-for="(t,index) in titles"
        :ref="el => { if (t===selected) selecteddItem = el }"
        :key="index"
      >{{t}}</div>
      <div
        class="gulu-tabs-nav-indicator"
        ref="indicator"
      ></div>
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />

      <!-- :key="current.props.title"解决tab内容缓存 -->
    </div>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
import { computed, ref, watchEffect, onMounted } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selecteddItem = ref(null);
    const indicator = ref(null);
    const container = ref(null);

    // onMounted(x); // 只在第一次更新执行
    // onUpdated(x); //更新时调用

    onMounted(() => {
      console.log("mounted");
    });
    watchEffect(() => {
      console.log("watcheffect");

      if(selecteddItem.value&&indicator.value){

      const {
        width,
        left: left1,
      } = selecteddItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";

      const { left: left2 } = container.value.getBoundingClientRect();
      const left = left1 - left2;
      indicator.value.style.left = left + "px";
      }

    });
    const defaults = context.slots.default();

    defaults.forEach((tag) => {
      if (tag.type != Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title == props.selected;
      })[0];
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title) => {
      context.emit("update:selected", title);
    };

    return {
      defaults,
      titles,
      current,
      select,
      indicator,
      container,
      selecteddItem,
    };
  },
};
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>