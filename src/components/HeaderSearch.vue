<template lang="">
    <div 
        v-click-outside = "setOpen"
        
        class = "container"
        :class = "{
           'container--active' :isOpen
        }">
        <input 
            type="text"
            class="input"
            :value = "modelValue"
            @input = "updateInput"
            :class = "{
                'input--active' :isOpen
            }"/>
        <base-icon componentName = "SearchIcon" class = 'icon' v-on:click = "setOpen"/>
    </div>
</template>
<script>
import vClickOutside from 'click-outside-vue3'

export default {
    directives: {
      clickOutside: vClickOutside.directive
    },
    data() {
        return {
            isOpen: false,
        }
    },
    props: {
        modelValue: [String, Number]
    },
    methods: {
        onClickOutside (event) {
        console.log('Clicked outside. Event: ', event)
      },
        setOpen() {
            this.isOpen = !this.isOpen
        },
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    }
}
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
        border: 2px solid #1C1C1C;
    }

    &--active {
        border: 2px solid #1C1C1C;
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