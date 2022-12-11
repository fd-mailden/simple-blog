<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
// import HeaderComponent from "@/components/Header/HeaderComponent.vue";
export default {
  // components: { HeaderComponent },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss"></style>
