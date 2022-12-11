<template lang="">
  <button class="button" :class="btnClasses">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "base-button",
  props: {
    className: {
      type: String,
    },
  },
  computed: {
    btnClasses() {
      if (!this.className) return "";

      const btnClasses = [];

      btnClasses.push(`button--${this.className}`);

      return btnClasses;
    },
  },
};
</script>
<style lang="scss" scoped>
.button {
  font-family: "Libre Baskerville";
  font-weight: 400;
  color: $border-color;
  border-radius: 10px;
  border: $main-border;
  border-radius: 10px;
  padding: 12px;
  min-width: 135px;
  background-color: #fff;
  &--full-width{
    width: 100%;
  }
}
</style>
