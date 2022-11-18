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
.logo {
    margin: 200px auto;
    max-width: 370px;
    text-align: center;

    &__image {
        width: 251px;
    }

    &__text {
        margin-top: 25px;
        font-family: 'Libre Baskerville';
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
}

.bottom-info {
    color: $border-color;
    max-width: 427px;
    margin: 200px auto;
    text-align: center;

    &__title {
        font-family: 'Libre Baskerville';
        font-weight: 400;
        font-size: 42px;
        line-height: 52px;
        margin-bottom: 35px;
    }

    &__text {
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }

}

.about-footer {
    background-color: $border-color;
    padding: 120px;


}

.footer-info {
    margin: 0 auto;
    color: $main-white;
    text-align: center;
    max-width: 332px;

    &__title {
        font-family: 'Libre Baskerville';
        font-weight: 400;
        font-size: 33px;
    }

    &__text {
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 16px;
        margin-top: 17px;
        margin-bottom: 28px;
    }
}
.social-media{
    
    &__item{
        margin: 0 8px;
    }
}
</style>