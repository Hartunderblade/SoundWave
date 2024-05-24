<script setup>
import artist from '@/artist.json';
import SongRow from '@/shared/SongRow/ui.vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);
</script>

<template>
    <div class="container-form">
        <div class="artist">
            <div  class="artist-track">
                <div v-for="track, index in artist.tracks" :key="track">
                    <SongRow  :artist="artist" :track="track" :index="++index" style="width: 1000px;" />
                </div>
            </div>
            
        </div>
        
        
    </div>
</template>

<style lang="scss" scoped>
        .artist{
            display: flex;
            // justify-content:space-around;
            justify-content: space-between;

            .artist-track{
                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                row-gap: 20px;
            }

            .banner{
                img{
                    border-radius: 10px;
                }
                // display: flex;
                // flex-direction: column;
                // row-gap: 100px;

                // padding: 54px 34px 35px 34px;
                // background: linear-gradient(136deg, #5b9dff 0%, #dd2b75 95.53%);
                // border-radius: 10px;

                // &__title{
                //     font-weight: 600;
                //     line-height: 100%;
                //     font-size: 34px;

                //     width: 400px;
                // }

                // .banner-cover{
                //     &__img{
                //         width: 420px;
                //         height: 240px;
                //     }
                // }
            }
        }
</style>