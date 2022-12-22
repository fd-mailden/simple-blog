<script setup>
import { ref, defineProps, toRefs, computed } from "vue";

const props = defineProps({
  size: [Boolean],
});

const { size } = toRefs(props);

const classObject = computed(() => {
  return { 'avatar--large': size };
});

const file = ref(null);
const handleFileUpload = async () => {
  let img = await document.getElementById("avatar");
  img.src = URL.createObjectURL(file.value.files[0]);
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };
};
</script>
<template>
  <div class="avatar" :class="classObject">
    <img
      id="avatar"
      src="~@/assets/image/download.png"
      alt=""
      class="avatar__image"
    />
    <input
      ref="file"
      v-on:change="handleFileUpload()"
      type="file"
      class="avatar__input"
    />
  </div>
</template>
<style lang="scss" scoped>
.avatar {
  position: relative;
  z-index: 0;
  text-align: center;
  margin-right: 20px;
  width: 350px;
  height: 250px;

  &__input {
    position: absolute;
    z-index: 2;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__image {
    z-index: -1;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &:after {
    transition: all 0.3s ease-out;
    content: "";
    opacity: 0;
    position: absolute;
    z-index: 1;
    background: $main-gray;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:hover {
    &:after {
      opacity: 0.7;
    }
  }

  &--large {
    width: 100%;
    height: 500px;
  }
}
</style>
