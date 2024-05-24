<script setup>
import { ref, toRefs, onMounted } from 'vue';

const props = defineProps({
    id: Number,
    img: String,
    title: String,
    subTitle: String,
    alt: String
})

const { id, img, title, subTitle, alt} = toRefs(props)

</script>

<template>
<div class="playlist">
    <img class="playlist__img" :src="img" :alt="alt">
    <div class="playlist-text">
        <p class="playlist-text__title"> {{ title }}</p>
        <p class="playlist-text__subtitle">{{ subTitle }}</p>
        <button><img src="@/app/images/plus.svg" alt=""></button>
    </div>
</div>
</template>

<style scoped lang="scss">
.playlist{
    border-radius: 10px;
    padding: 40px; 
    background: #181818;
    &__img{
        width: 190px;
        height: 200px;
        border-radius: 10px;
    }

    &-text{
        &__title{
            font-weight: 400;
            font-size: 20px;

            margin: 14px 0 8px 0;
        }

        &__subtitle{
            font-weight: 400;
            font-size: 18px;
            line-height: 124%;
            color: #a7a7a7;
            
            width: 180px;
        }
        button{
            img{
                width: 22px;
                height: 22px;

                margin-top: 10px;
            }
        }
    }
}
</style>