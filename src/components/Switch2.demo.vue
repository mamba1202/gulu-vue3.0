<demo>
支持 disabled
</demo>
<template>
<Switch v-model:value="bool" disabled />
</template>


<script>
import Switch from "../lib/Switch.vue";

export default {
  components: {
    Switch,
  },
};
</script>