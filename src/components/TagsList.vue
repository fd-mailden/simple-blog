<template lang="">
    <ul class = "list">
        <p class = "list__title">tags.</p>
        <li class = "list__item" v-for="tag in tags" :key="tag">
            <a class = "list__link" href="">{{tag}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            tags: ['Technology',
                'Open Source',
                'JavaScript',
                'Minimalism',
                'Self - help',
                'Animals',
                'Herbivores',
                'HTML',
                'CSS',
                'PHP',
                'Web Technologies',
                'Career',
                'Life',
                'Spirituality',
                'Food',
                'Cooking',
                'Sports',
                'Racing',
                'Mountain Hiking',
                'Cruising',
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.list {
    font-family: 'Open Sans';
    color: $main-black;

    &__title {
        font-weight: 700;
        font-size: 20px;
        color: $border-color;
        margin-bottom: 15px;
    }

    &__item {
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 16px;

    }

}
</style>