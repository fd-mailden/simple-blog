<template lang="">
    <header class = "header">
        <div class="navigate">
            <img src="~@/assets/image/Logo-img.png" alt="">
            <NavigationMenu/>
        </div>
        <div class="login">
            <base-icon componentName = "SearchIcon" class = 'icon'/>
            <base-button>Login</base-button>
        </div>
        
    </header>
</template>
<script>
import NavigationMenu from './NavigationMenu.vue';
export default {
    components: {
        NavigationMenu,
    }
}
</script>
<style lang="scss" scoped>
    .header{
        margin: 0 auto;
        padding: 31px 25px;
        display: flex;
        justify-content: space-between;
        max-width: $app-width;
        padding: 0 16px;
    }
    .navigate{
        display: flex;
        align-items: center;
    }
    .login{
        display: flex;
        align-items: center;
    }
    .icon{
        margin-right: 21px;
    }
</style>