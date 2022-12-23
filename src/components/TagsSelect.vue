<script setup>
import { defineProps, toRefs, reactive, computed } from "vue";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { TAGS } from "@/consts/tags";
import BaseInput from "@/components/UI/BaseInput.vue";

const props = defineProps({
  currentTags: {
    type: Array,
    required: true,
  },
  setTag: {
    type: Function,
    required: true,
  },
  deleteTag: {
    type: Function,
    required: true,
  },
});
const { currentTags, setTag } = toRefs(props);
const data = reactive({
  searchQuery: "",
  isOpen: false,
});
const searchedTags = computed(() => {
  if (!data.searchQuery) {
    return TAGS;
  }
  return TAGS.filter((tag) =>
    tag.name.toLowerCase().includes(data.searchQuery.toLowerCase())
  );
});

function setOpen() {
  data.isOpen = true;
}
function setClose() {
  data.isOpen = false;
}
</script>

<template>
  <popper :show="data.isOpen">
    <div class="select" v-on:click="setOpen"  v-click-outsides="setClose">
      <ul class="current-tags">
        <li
          v-for="tag in currentTags"
          :key="tag.id"
          v-on:click="deleteTag(tag)"
          class="current-tags__item"
        >
          #{{ tag.name }}
        </li>
      </ul>

      <base-input
        type="text"
        v-model="data.searchQuery"
        placeholder="Search"
        margin
      />
    </div>
    <template #content>
      <ul class="options">
        <li
          v-for="tag in searchedTags"
          :key="tag.id"
          v-on:click="setTag(tag)"
          class="option"
        >
          <base-icon component-name="KeyIcon" />
          <p class="option__text">{{ tag.name }}</p>
        </li>
      </ul>
    </template>
  </popper>
</template>

<style lang="scss" scoped>
.select {
  padding: 10px;
  border-radius: 5px;
  position: relative;
  width: 300px;
}

.current-tags {
  display: flex;
  flex-wrap: wrap;

  &__item {
    background-color: $main-light;
    margin: 2px;
    padding: 2px 5px;
    border-radius: 5px;
    cursor: pointer;
  }
}

.input {
  border: none;
  background-color: $main-white;
  border-bottom: $main-border;
  width: 100%;
  margin: 15px 0;
  padding: 5px 0;
}

.options {
  width: 300px;
  max-height: 300px;
  overflow: scroll;
  padding: 0 7px;
  border: $main-border;
  background-color: $main-white;
  display: flex;
  flex-wrap: wrap;
}

.option {
  display: flex;
  cursor: pointer;
  padding: 5px 7px;
  margin: 5px 0;

  &__text {
    margin-left: 10px;
  }

  &:hover {
    background-color: $main-light;
    border-radius: 5px;
  }
}
</style>

