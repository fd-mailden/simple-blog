<template lang="">
  <div class="input-wrapper" :class="classObject">
    <slot></slot>
    <input
      type="text"
      class="input"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateInput"
      v-bind="$attrs"
    />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
    },
    marginTop: {
      type: Boolean,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  computed: {
    classObject: function () {
      return {
        "input-wrapper--margin-bottom": this.marginTop,
      };
    },
  },
  name: "base-input",
};
</script>
<style lang="scss" scoped>
.input-wrapper {
  background: #f8f8f8;
  border-radius: 10px;
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  &--margin-bottom {
    margin-bottom: 14px;
  }
}
.input {
  width: 100%;
  border: none;
  background-color: transparent;
  padding-left: 15px;
  &:focus {
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  &:focus::placeholder {
    color: transparent;
  }
}
</style>
