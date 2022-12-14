<template>
  <component :is="layout">
    <router-view />
  </component>
  <div class=""></div>
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
