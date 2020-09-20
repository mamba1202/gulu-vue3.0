<demo>
支持 disabled
</demo>
<template>
<Switch v-model:value="bool" disabled />
</template>


<script>
import Switch from "../components/SwitchDemo";
export default {
  components: {
    Switch,
  },
};
</script>