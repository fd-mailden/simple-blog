<template>
  <div class="check-wrapper">
    <input type="checkbox" class="checkbox" />
    <label for="" class="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },

  name: "base-checkbox",
};
</script>

<style lang="scss" scoped>
.check-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  border-radius: 5px;
  border: $main-border;
  width: 18px;
  height: 17px;
  cursor: pointer;
}

.label {
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: $main-gray;
  margin-left: 5px;
  cursor: pointer;
}
</style>
