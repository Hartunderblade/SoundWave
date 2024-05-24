<script setup>
import artist from '@/artist.json';
import SongRow from '@/shared/SongRow/ui.vue';
import Playlist from '@/shared/playlist/ui.vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);
</script>

<template>
    <main class="container-form">
        <section style="margin-bottom: 60px;">
            <h1 style="font-size: 28px; margin-bottom: 40px;">Рекомендуем послушать</h1>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                <div v-for="track, index in artist.tracks.slice(0, 6)" :key="track" style="display: flex;">
                    <SongRow  :artist="artist" :track="track" :index="++index" style=" width: 480px;"/>
                </div>
            </div>
            
        </section>
        <section style="margin-bottom: 40px;">
            <h1 style="font-size: 28px; margin-bottom: 40px;">Специально для вас</h1>
            <div style="display: flex; flex-wrap: wrap; gap: 32px;">
                <!-- <Playlist/> -->
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
                <Playlist img="src/app/images/topHits.png" title="Today's Top Hits" subTitle="Ed Sheeran is on top of the Hottest 50!" />
            </div>
            
        </section>

    </main>
</template>

<style scoped lang="scss">

</style>