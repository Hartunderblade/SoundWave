<script setup>
import { ref, onMounted } from 'vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';

const useSong = useSongStore()
const { audio } = storeToRefs(useSong)

let isHover = ref(false)

let vol = ref(80)
let volume = ref(null)

onMounted(() => {
    volume.value.addEventListener("input", (e) => {
        audio.value.volume = e.currentTarget.value / 100;
    });
})

</script>

<template>
  <img class="volume" v-if="vol == 0"  src="@/app/images/volume-icon.svg" alt="">
  <img class="volume" v-else src="@/app/images/volume-icon.svg" alt="">
  <div @mouseenter="isHover = true" @mouseleave="isHover = false">
    <input type="range" v-model="vol" ref="volume">
  </div>
</template>

<style scoped lang="scss">
.volume{
    width: 22px;
    height: 22px;

    margin-bottom: 6px;
}

div{
    input{
        accent-color: #fff;
        width: 100px;
    };
}
</style>