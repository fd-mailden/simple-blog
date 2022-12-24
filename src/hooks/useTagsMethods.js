import { ref } from "vue";

export const useTagsMethods = (tags) => {
  const currentTags = ref([]);
  if (tags.length) {
    currentTags.value = tags;
  }
  currentTags.value = tags;
  const setTags = (tag) => {
    let currentTag = currentTags.value.find((thisTag) => thisTag.id === tag.id);
    if (currentTag) {
      return null;
    }
    currentTags.value.push(tag);
  };
  const deleteTag = (tag) => {
    console.log(tag);
    currentTags.value = currentTags.value.filter(
      (currentTag) => currentTag.id !== tag.id
    );
  };
  return {
    methods: {
      setTags,
      deleteTag,
    },
    currentTags,
  };
};
