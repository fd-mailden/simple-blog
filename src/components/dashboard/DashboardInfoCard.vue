<template>
  <div class="card" :class="classObject">
    <p class="text text--top">{{ name }}</p>
    <div class="value">
      <base-icon :component-name="icon" class="value__icon" />
      <p class="value__text">{{ value }}</p>
    </div>
    <p class="text text--bottom">This month</p>
  </div>
</template>

<script>
import BaseIcon from "@/components/UI/BaseIcon.vue";

export default {
  components: { BaseIcon },

  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    value: {
      type: [Number, String],
      required: true,
    },
    large: [Boolean],
  },
  computed: {
    classObject: function () {
      return {
        "card--large": this.large,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
  height: 110px;
  width: 176px;
  border: 2px solid rgba(28, 28, 28, 0.35);
  border-radius: 10px;

  &--large {
    width: 621px;
  }
}

.value {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $border-color;

  &__text {
    @include max-fields(1);
    font-family: "Libre Baskerville";
    font-weight: 400;
    font-size: 33px;
  }

  &__icon {
    margin-right: 21px;
  }
}

.text {
  font-weight: 400;
  font-size: 14px;

  &--top {
    text-align: start;
    color: $border-color;
  }

  &--bottom {
    text-align: end;
    color: $main-gray;
  }
}
</style>
