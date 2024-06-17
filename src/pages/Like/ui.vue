<script setup>
import { onBeforeMount, ref } from 'vue';
import artistData from '@/artist.json';
import SongRow from '@/shared/SongRow/ui.vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist, like } = storeToRefs(useSong);

// function getTrack(){
//   if(!localStorage.getItem(like)){
//     localStorage.setItem('cart', JSON.stringify([]))
//   }
//   like.value = JSON.parse(localStorage.getItem('like'));
// }

// onBeforeMount(() => {
//   getTrack();
// })


</script>

<template>
  <div class="container-form">
    <div v-for="track in like" :key="track.id">
      <SongRow :track="track" :artistData="artistData" :index="++index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>