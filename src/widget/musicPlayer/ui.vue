<script setup>
import { ref, watch, onMounted } from 'vue';
import MusicPlayerVolume from '@/shared/musicPlayerVolume/ui.vue';

import { useSongStore } from '@/stores/song.js'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)


// const props = defineProps({
//     track: Object,
//     atrist: Object,
//     index: Number,
//     albumCover: String,
// })


onMounted(() => {

if (audio.value) {
    setTimeout(() => {
        timeupdate()
        loadmetadata()
    }, 300)
}

if (currentTrack.value) { 
    seeker.value.addEventListener("change", function () {
        const time = audio.value.duration * (seeker.value.value / 100);
        audio.value.currentTime = time;
    });

    seeker.value.addEventListener("mousedown", function () {
        audio.value.pause();
        isPlaying.value = false
    });

    seeker.value.addEventListener("mouseup", function () {
        audio.value.play();
        isPlaying.value = true
    });

    seekerContainer.value.addEventListener("click", function (e) {
        const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
        const time = audio.value.duration * clickPosition;
        audio.value.currentTime = time;
        seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
    });
}
})

const timeupdate = () => {
audio.value.addEventListener("timeupdate", function () {
    var minutes = Math.floor(audio.value.currentTime / 60);
    var seconds = Math.floor(audio.value.currentTime - minutes * 60);
    isTrackTimeCurrent.value = minutes+':'+seconds.toString().padStart(2, '0')
    const value = (100 / audio.value.duration) * audio.value.currentTime;
    range.value = value
    seeker.value.value = value;
});
}

const loadmetadata = () => {
audio.value.addEventListener('loadedmetadata', function() {
    const duration = audio.value.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    isTrackTimeTotal.value = minutes+':'+seconds.toString().padStart(2, '0')
});
}

watch(() => audio.value, () => {
timeupdate()
loadmetadata()
})

watch(() => isTrackTimeCurrent.value, (time) => {
if (time && time == isTrackTimeTotal.value) {
    useSong.nextSong(currentTrack.value)
    console.log(isTrackTimeTotal.value)
}
})


</script>

<template>
<div v-if="audio" class="player" id="MusicPlayer">
   <div class="wrapper">
        <div class="track">
            <img width="55" :src="currentTrack.albumCover" alt="">
            <div class="track-text">
                <p class="track-text__title">{{ currentTrack.name }}</p>
                <p class="track-text__artist">{{ currentTrack.author }}</p>
            </div>
            <button class="track-like">
                <img src="@/app/images/liked-inactive.svg" alt="">
            </button> 
        </div>
   </div>
   <div class="play">
        <div class="item">
            <button class="item-prev" @click="useSong.prevSong(currentTrack)">
                <img src="@/app/images/skipBackward.svg" alt="Назад">
            </button>
            <button class="item-play" @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)">
                <img v-if="!isPlaying" src="@/app/images/pausePlayer.svg" alt="Остановить">
                <img v-else src="@/app/images/playPlayer.svg" alt="Играть"> 
            </button>
            <button class="item-next" @click="useSong.nextSong(currentTrack)">
                <img src="@/app/images/nextSong.svg" alt="Вперёд">
            </button>
        </div>
    <div class="range">
        <p class="range__time" v-if="isTrackTimeCurrent">{{ isTrackTimeCurrent }}</p>
        <div class="range__play" ref="seekerContainer" @mouseenter="isHover = true" @mouseleave="isHover = false">
            <input type="range" v-model="range" ref="seeker" :class="{'rangeDontHidden' : !isHover}">
        </div>
        <p class="range__time" v-if="isTrackTimeTotal">{{ isTrackTimeTotal }}</p>
    </div>
    
   </div>

   <div class="volume">
        <MusicPlayerVolume/>
   </div>
</div>
</template>

<style scoped lang="scss">
.player{
    position: fixed;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    bottom: 0;
    width: 100%;
    z-index: 40;
    height: 140px;
    background-color: #181818;
    border-top: 1px solid #000;

    .wrapper{
        display: flex;
        align-items: center;

        .track{
            display: flex; align-items: center; margin-left: 40px;

            img{
                width: 80px;
                height: 80px;
                border-radius: 8px;
            }

            &-text{
                margin-left: 20px;

                &__title{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 142%;
                }

                &__artist{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 160%;
                    color: #d0d0d0;
                }
            }

            &-like{
                margin-left: 44px;
                img{
                    width: 34px;
                    height: 34px;
                }
            }
        }
    }

    

    .play{
        max-width: 557px; 
        margin: 0 auto; 

        .item{
            display: flex; 
            align-items: center; 
            justify-content: center;
            height: 30px;

            &-prev, &-next{
                margin: 0 20px;
            }

            &-play{
                img{
                    width: 36px;
                    height: 36px;
                }
            }
        }

        .range{
            display: flex;
            align-items: center;
            margin-top: 20px;

            &__time{
                font-weight: 400;
                font-size: 16px;
                color: #a7a7a7;
            }

            &__play{

                margin: 0 20px;
                input{
                    accent-color: #fff;
                    width:400px;
                }
            }
        }
    }

    .volume{
        display: flex;
        align-items: center;
        column-gap: 6px;

        margin-right: 40px;
    }
}
</style>