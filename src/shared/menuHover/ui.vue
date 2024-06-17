<script setup>
// import { ref, toRefs, watchEffect } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute()

// const props = defineProps({
//     iconString: String,
//     iconSize: Number,
//     pageUrl: String,
//     name: String
// })

// const { iconString,  iconSize, pageUrl, name } = toRefs(props)

// let icon = ref(null)
// let textIsHover = ref(false)

// watchEffect(() => {
//     if(route.path == pageUrl.value){
//         icon.value = iconString.value + '-active'
//         textIsHover.value = false
//     }
//     else{
//         icon.value = iconString.value + '-inactive'
//         textIsHover.value = false
//     }
// })

// const isHover = () => {
//     if (icon.value === iconString.value + '-active') return

//     if(icon.value === iconString.value + '-inactive'){
//         icon.value = iconString.value + '-inactive-hover'
//         textIsHover.value = true
//     }
//     else{
//         icon.value === iconString.value + '-inactive'
//         textIsHover.value = false
//     }
// }

import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const props = defineProps({
    iconString: String,
    iconSize: Number,
    pageUrl: String,
    name: String
})
const { iconString, pageUrl, name, iconSize } = toRefs(props)

let icon = ref(null)
let textIsHover = ref(false)

watchEffect(() => {
    if (route.path == pageUrl.value) {
        icon.value = iconString.value + '-active'
        textIsHover.value = true
    } else {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false
    }
})

const isHover = () => {
    if (icon.value === iconString.value + '-active') return

    if (icon.value === iconString.value + '-inactive') {
        icon.value = iconString.value + '-inactive-hover'
        textIsHover.value = true
    } else if (icon.value === iconString.value + '-inactive-hover') {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false
    }
}
</script>

<template>
    <li class="item" @mouseenter="isHover()" 
        @mouseleave="isHover()"
    >

        <img class="item__img" :width="iconSize" :src="`./src/app/images/${icon}.svg`" alt="Icon">
        <div class="item__text white gray" :class="textIsHover ? white : gray">
            <span class="white" :class="route.path == pageUrl ?  white : ''">
                {{ name }}
            </span>
        </div>
  </li>
</template>



<style lang="scss">
    .item{
        display: flex;
        align-items: center;
        justify-content: start ;
        padding-bottom: 4px;
        cursor: pointer;

        &__img{
            padding-right: 4px;
        }

        &__text{
            font-weight: 700;
            font-size: 18px;

            margin-left: 4px;
            margin-top: 6px;

            .white{
                color: white;
            }
            
        }.white{
            color: white;
        }

        .gray{
            color: gray;
        }

        
    }
</style>