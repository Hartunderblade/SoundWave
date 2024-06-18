<script setup>
import { ref, computed } from 'vue';
import artistData from '@/artist.json';
import SongRow from '@/shared/SongRow/ui.vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);

const search = ref('');

//функция поиска

const filteredTracks = computed(() => {
    if (search.value.length === 0) return artistData.tracks;  
    return artistData.tracks.filter((item) => {
        let str = search.value.toLowerCase();
        return item.author.toLowerCase().includes(str) || item.name.toLowerCase().includes(str)
    });
});

</script>

<template>
    <div class="container-form">
        <input type="text" v-model="search" placeholder="Что ты хочешь послушать?">
        
        <div class="artist">
            <div class="artist-track">
                <div v-for="track, index in filteredTracks" :key="track">
                    <SongRow isFavorite :artistData="artistData" :track="track" :index="++index" style="width: 1000px;" />
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.container-form{
    input{
        color: #000;
        width: 300px;
        padding: 14px;
        border-radius: 100px;
        
        margin-bottom: 40px;
    }
}
.artist {
    display: flex;
    justify-content: space-between;

    .artist-track {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
}
</style>