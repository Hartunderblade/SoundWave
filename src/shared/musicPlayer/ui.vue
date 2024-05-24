<script setup>
import { ref, watch, onMounted } from 'vue';

import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';

// import artist from '@/artist.json';
// import SongRow from '@/shared/SongRow/ui.vue';

const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {

if (audio.value) {
    setTimeout(() => {
        timeupdate()
        loadmetadata()
    }, 300)
}

if (currentTrack.value) { 
    seeker.value.addEventListener('change', function () {
        const time = audio.value.duration * (seeker.value.value / 100);
        audio.value.currentTime = time;
    });

    seeker.value.addEventListener('mousedown', function () {
        audio.value.pause();
        isPlaying.value = false
    });

    seeker.value.addEventListener('mouseup', function () {
        audio.value.play();
        isPlaying.value = true
    });

    seekerContainer.value.addEventListener('click', function (e) {
        const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
        const time = audio.value.duration * clickPosition;
        audio.value.currentTime = time;
        seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
    });
}
})

const timeupdate = () => {
audio.value.addEventListener('timeupdate', function () {
    let minutes = Math.floor(audio.value.currentTime / 60);
    let seconds = Math.floor(audio.value.currentTime - minutes * 60);
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
}
})


</script>


<template>

    <div id="MusicPlayer" style="position: fixed; display: flex; align-items: center; justify-content: space-between; bottom: 0; width: 100%; z-index: 50; height: 90px; background: #181818; border-top: 1px solid #272727;">
        <div style="display: flex; align-items: center; margin: 30px 70px ;">
            <!-- <img :src="currentArtist.albumCover" style="width: 70px; border-radius: 8px;" alt=""> -->
            <img src="@/app/images/image-track-1.jpg" style="width: 70px; border-radius: 8px;" alt="">
            <div style="margin-left: 40px;">
                <div style="font-size: 14px; color: #fff; cursor: pointer;">
                    <!-- {{ currentTrack.name }}  -->
                    text
                </div>
            </div>
            <div style="display: flex; align-items: center; margin-left: 80px;">
            <img src="@/app/images/heart-like-inactive.svg" alt="">
        </div>
        </div>
        <div style="max-width: 35%; margin: 0 auto; margin-bottom: 30px;">
            <div style="display: flex; align-items: center; justify-content: center;">
                <div style="display: flex; align-items: center; justify-content: center; height: 30px;">
                    <button>
                        <img src="@/app/images/skip-arrow-l.svg" alt="">
                    </button>
                    <button>
                        <img src="" alt="">
                    </button>
                    <button>
                        <img src="@/app/images/skip-arrow.svg" alt="">
                    </button>
                    
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>
