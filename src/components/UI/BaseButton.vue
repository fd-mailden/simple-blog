<template lang="">
   <button class = "button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'base-button',

}
</script>
<style lang="scss">
.button {
    font-family: 'Libre Baskerville';
    font-weight: 400;
    color: $border-color;
    border-radius: 10px;
    border: $main-border;
    border-radius: 10px;
    padding: 12px;
    min-width: 135px;
}
</style>