<template lang="">
  <div
    v-click-outsides="hiddenWindow"
    class="container"
    :class="{
      'container--active': isOpen,
    }"
  >
    <input
      type="text"
      class="input"
      :value="modelValue"
      @input="updateInput"
      :class="{
        'input--active': isOpen,
      }"
    />

    <popper :show="isOpen">
      <base-icon componentName="SearchIcon" class="icon" v-on:click="setOpen" />

      <template #content>
        <PostWindow
          :posts="posts"
          :isActive="isOpen"
          @navigate="navigateToPost"
        />
      </template>
    </popper>
  </div>
</template>

<script>
import PostWindow from "./PostsWindow.vue";
import { ROUTER } from "@/settings/vue-routs";

export default {
  components: { PostWindow },

  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    modelValue: [String, Number],
    posts: {
      type: Array,
    },
  },
  methods: {
    setOpen() {
      this.isOpen = !this.isOpen;
    },
    hiddenWindow() {
      this.isOpen = false;
    },
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    navigateToPost(id) {
      this.$router.push(ROUTER.POST.generate(id));
      this.hiddenWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 10px;
  width: 100%;
  max-width: 50px;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    border: 2px solid #1c1c1c;
  }

  &--active {
    border: 2px solid #1c1c1c;
    max-width: 363px;
  }
}

.input {
  height: 30px;
  border: none;
  width: 0;

  &--active {
    width: 100%;
  }
}
</style>
