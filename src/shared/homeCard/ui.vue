<script setup>
import { toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})

const { image, title, subTitle } = toRefs(props)
</script>

<template>
  <RouterLink to="/library">
    <div class="card">
        <img class="card__img" :src="image" alt="Img playlist">
        <p class="card__title">{{title}}</p>
        <p class="card__subTitle">{{subTitle}}</p>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
    .card{
        background: #181818;
        border-radius: 10px;
        padding: 40px;

        &:hover{
            background: #292929;
            transition: 0.6s;
        }

        &__img{
            width: 190px;
            height: 200px;
            border-radius: 6px;
        }

        &__title{
            font-weight: 400;
            font-size: 20px;

            margin-top: 15px;
            margin-bottom: 6px;
        }
        
        &__subTitle{
            font-weight: 400;
            font-size: 18px;
            color: #a7a7a7;

            width: 170px;
        }
    }
</style>