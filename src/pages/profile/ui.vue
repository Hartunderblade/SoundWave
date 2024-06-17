<script setup>
import { ref, onMounted } from 'vue';
import Menu from '@/widget/menu/ui.vue';
import ProfilMenu from '@/widget/profilMenu/ui.vue';
import Navigation from '@/widget/navigation/ui.vue';
import MusicPlayer from '@/widget/musicPlayer/ui.vue';


import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  isPlaying.value = false
})
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <Menu/>
      </nav>
    </header>
    <main>
      <Navigation/>
      <RouterView/>
    </main>
    <MusicPlayer  v-if="currentTrack"/>
  </div>
</template>

<style scoped lang="scss">

</style>