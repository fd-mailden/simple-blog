<template lang="">
        
    <section class = "logo">
        <img src="@/assets/image/logo.svg" alt="" class = "logo__image">
        <p class = "logo__text">A publishing company that focuses on the essentials.</p>
    </section>
    <CompAbout/>

    <section class = "bottom-info">
        <h4 class = "bottom-info__title">Because we are you. Humans.</h4>
        <p class = "bottom-info__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</p>
    </section>

    <section class="about-footer">
        <article class = "footer-info">
            <h4 class = "footer-info__title">want to connect?</h4>
            <p class = "footer-info__text">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</p>
            <div class="social-media">
                <base-icon componentName = "TwitterIcon" class = "social-media__item"/>
                <base-icon componentName = "InstagramIcon" class = "social-media__item" />
                <base-icon componentName = "LinkedinIcon" class = "social-media__item" />
            </div>
        </article>
    </section>

</template>
<script>
import CompAbout from '@/components/CompAbout.vue'
export default {
    components: { CompAbout }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/app/pages/_app-about.scss';


</style>