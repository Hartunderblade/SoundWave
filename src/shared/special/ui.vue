<script setup>
import { toRefs, ref } from 'vue';
import { RouterLink } from 'vue-router';

let isHover = ref(false);

const props = defineProps({
    by: String, 
    image: String,
    text: String,
    to: String
})

const { by, image, text, to } = toRefs(props)

</script>

<template>
  <div style="display: flex; align-items: center; width: 100%;">
    <RouterLink :to="to" style="position: relative;">
        <div style="display: flex; align-items: center; background-color: #23232D; border-radius: 20px; height: 54px; position: relative;">
            <div style="display: flex; align-items: center; width: 54px;" @mouseenter="$event => isHover = true" @mouseleave="$event => isHover = false">
                <!-- <div 
                    :class="isHover ? 'bg1' : 'bg2'"
                    style="position: absolute; height: 100%; z-index: 10; width: 54px; background-color: #000; border-radius: 20px;" /> -->
                <div :class="isHover ? 'bg1' : 'bg2'" >
                    <img width="30" height="30" src="@/app/images/play.svg" alt="">
                </div>
                <img style="min-height: 54px; min-width: 54px; z-index: 0;" :src="image" alt="">
            </div>
        </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.bg1{
    background-color: #424242;
}
.bg2{
    background-color: #2c2c2c;
}
</style>