<template lang="">
    <form class = "input-wrapper">
        <input type="text"
        :value = "modelValue"
         @input = "updateInput"
            class="input"
            placeholder = "Find the topics you care about...">
        <button type = "submit" class = "button">
            <base-icon componentName = "SearchIcon"/>
        </button>
    </form>
</template>
<script>
export default {
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.input-wrapper {
    width: 100%;
    max-width: 707px;
    border: 1px solid $main-black;
    border-radius: 25px;
    padding: 10px 23px;
    display: flex;
    justify-content: space-between;
    &::placeholder{
        color: rgba(0, 0, 0, 0.5);
    }
}

.input {
    outline: none;
    border: none;
    width: 100%;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

}

.button {
    border: none;
    background: transparent;
    padding: 0;
}
</style>