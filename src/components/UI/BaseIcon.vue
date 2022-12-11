<template>
  <component :is="currentIcon" v-bind="$attrs" />
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "base-icon",
  props: {
    componentName: {
      type: String,
      required: true,
    },
  },

  computed: {
    currentIcon() {
      return defineAsyncComponent(() =>
        import(`../icons/${this.componentName}.vue`)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.icon-wrap {
  display: inline-block;

  ::v-deep svg {
    width: 100%;
  }
}
</style>
