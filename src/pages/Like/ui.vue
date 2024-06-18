<script setup>
import { onBeforeMount, ref, registerRuntimeCompiler } from 'vue';
import artistData from '@/artist.json';
import SongRow from '@/shared/SongRow/ui.vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);

const like = ref([]);

function getTrack(){
  if(!localStorage.getItem('like')){
    localStorage.setItem('like', JSON.stringify([]))
  }
  like.value = JSON.parse(localStorage.getItem('like'));
}

onBeforeMount(() => {
  getTrack();
})


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