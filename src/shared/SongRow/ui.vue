<script setup>
import { ref, toRefs, onMounted } from 'vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let isHover = ref(false);
let isTrackTime = ref(null);

let addPlaylist = ref(false)

const props = defineProps({
    track: Object,
    artist: Object,
    index: Number
})

const { track, artist, index} = toRefs(props)

onMounted(() => {
    const audio = new Audio(track.value.path);
    audio.addEventListener('loadedmetadata', function(){
        const duration = audio.duration;
        const minutes = Math.floor(duration /  60);
        const seconds = Math.floor(duration % 60);
        isTrackTime.value = minutes+':'+seconds.toString().padStart(2,'0')
    })
})
</script>

<template>

    <div @mouseenter="isHover = true" @mouseleave="isHover = false"  class="recommendation-items">
                <div class="recommendation-item" :width="widthSize">
                    <div class="recommendation-info">
                        <div v-if="isHover">
                            <img 
                                v-if="!isPlaying" 
                                src="@/app/images/play.svg" 
                                alt="Play" 
                                @click="useSong.playOrPauseThisSong(artist, track)"

                                style="width: 80px;
                        height: 80px;"
                            >
                            <img 
                                v-else-if="isPlaying && currentTrack.name !== track.name" 
                                src="@/app/images/play.svg" 
                                alt="Play" 
                                @click="useSong.loadSong(artist, track)"

                                style="width: 80px;
                        height: 80px;"
                                
                            >

                            <img style="width: 80px;
                        height: 80px;" v-else src="@/app/images/pause.svg" alt="Pause" @click="useSong.playOrPauseSong()" >
                        </div>
                        <div v-else style="color: #fff; font-weight: 700;">
                            <span :class="{color : currentTrack && currentTrack.name === track.name}" ><img class="recommendation-info__img" src="@/app/images/image-track-1.jpg" alt="Cover"></span>
                        </div>
                        <!-- <img class="recommendation-info__img" src="@/app/images/image-track-1.png" alt="Cover"> -->
                        <div class="recommendation-text">
                            <p class="recommendation-text__title">{{ artist.name }}</p>
                            <p class="recommendation-text__subTitle">{{ track.name }}</p>
                        </div>
                    </div>
                    <div class="recommendation-features">
                        <img v-if="!addPlaylist" @click="addPlaylist = true" class="recommendation-features__plus" src="@/app/images/plus.svg" alt="Add">
                        <img v-else @click="addPlaylist = false" class="recommendation-features__plus" src="@/app/images/plus.svg" alt="Add">
                        <div v-if="addPlaylist" style="position: absolute; top: 80px; background-color: #000; border-radius: 10px;">
                            <div style="position: relative;  padding: 10px;">
                                <p style="padding-bottom: 10px; border-bottom: 1px solid #fff;">Добавить в альбом</p>
                                <div style="display: flex; justify-content: space-between; margin: 22px 0 10px 0">
                                    <p>Winter</p>
                                    <img src="@/app/images/check mark.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <img class="recommendation-features__like" src="@/app/images/heart-like-inactive.svg" alt="Add">
                    </div>
                </div>
            </div>
</template>

<style lang="scss" scoped>
.recommendation-items{
    .recommendation-item{
        display: flex;
        justify-content: space-between;


        // column-gap: 380px;

        // width: 1000px;

        background: #333;
        border-radius: 6px;
        padding: 10px 20px;

        // max-width: 2200px;


        .recommendation-info{
            display: flex;
            align-items: center;
            column-gap: 10px;

            &__img{
                width: 80px;
                height: 80px;
                
                box-shadow: 14px 0 22px 0 rgba(0, 0, 0, 0.25);
                border-radius: 8px;
            }

            .recommendation-text{
                flex-direction: column;
                display: flex;

                &__title{
                    font-size: 20px;
                    font-weight: 700;
                }

                &__subTitle{
                    font-size: 18px;
                    color: #d0d0d0;
                    font-weight: 500;
                }
            }
        }

        .recommendation-features{

            align-items: center;
            column-gap: 28px;
            display: flex;

            &__plus{
                height: 28px;
                width: 28px;
                cursor: pointer;
            }

            &__like{
                width: 28px;
                height: 28px;

                cursor: pointer;
            }
        }
    }
}
</style>