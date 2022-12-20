<template>
  <component :is="layout">
    <router-view />
  </component>
  <notifications position="bottom left" closeOnClick :max="3" />
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss"></style>
