<template>
  <textarea v-bind="$attrs" class="textarea" :class="classObject"></textarea>
</template>

<script>
export default {
  props:{
    resize:{
      type: [Boolean]
    }
  },
  computed:{
    classObject(){
      return{
        'textarea--resize' : this.resize
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.textarea {
  box-sizing: border-box;
  font-family: "Open Sans";
  background: #f8f8f8;
  border-radius: 10px;
  height: 100px;
  padding: 14px;
  width: 100%;
  resize: none;
  border: none;
  margin: 20px 0;
  @include scrollbar;

  &--resize{
    height: 500px;

  }
}
</style>
