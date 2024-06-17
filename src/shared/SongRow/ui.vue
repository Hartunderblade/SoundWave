<script setup>
import { ref, toRefs, onMounted } from 'vue';
import { useSongStore } from '@/stores/song.js';
import { storeToRefs } from 'pinia';

import artistData from '@/artist.json';

const useSong = useSongStore()
const { isPlaying, currentTrack} = storeToRefs(useSong)

let isHover = ref(false);
let isTrackTime = ref(null);

let like = ref([]);

const isLiked = ref(false) 


const isFavorite = () => {
    isLiked.value = !isLiked.value;
};

const props = defineProps({
    track: Object,
    atrist: Object,
    index: Number,
    albumCover: String,
    isFavorite: Boolean,
    onClickFavorite: Function
})

const { track, atrist, index, albumCover } = toRefs(props)

//функция подсчета длительности трека

onMounted(() => {
    const audio = new Audio(track.value.path);
    audio.addEventListener('loadedmetadata', function() {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTime.value = minutes+':'+seconds.toString().padStart(2, '0')
    })
})


function addToFavorites(track) {
  if (!isLiked.value) {
    isLiked.value = true;
    like.value.push(track);
  } else {
    isLiked.value = false;
    const index = like.value.findIndex(item => item.id === track.id);
    if (index !== -1) {
      like.value.splice(index, 1);
    }
  }
  localStorage.setItem('like', JSON.stringify(like.value));
}
</script>

<template>
    <div  class="tracks">
        <div class="track" @mouseenter="isHover = true" @mouseleave="isHover = false">
            <div class="item">
                <div v-if="isHover">
                    <img 
                        v-if="!isPlaying" 
                        src="@/app/images/play.svg" 
                        alt="Pay"
                        @click="useSong.playOrPauseThisSong(artist, track)"
                        >
                    <img 
                        v-else-if="isPlaying && currentTrack.name !== track.name"
                        src="@/app/images/play.svg" 
                        alt="Pay"
                        @click="useSong.loadSong(artist, track)"
                        >

                    <img v-else src="@/app/images/pause.svg" alt="Pause" @click="useSong.playOrPauseSong()">
                </div>
                <div class="item-img" v-else>
                    <img :src="track.albumCover" alt="Обложка">
                </div>
                <div class="item-name">
                    <p class="item-name__title" :class="{active : currentTrack && currentTrack.name === track.name}">
                        {{ track.name }}
                    </p>
                    <p class="item-name__subtitle">
                        {{ track.author }}
                    </p>
                </div>
            </div>
            <div class="track-details">
                <button @click="() => addToFavorites(track)" class="track-details__like" type="submit" v-if="isHover">
                    <img :src="isLiked ? '/src/app/images/active-like.svg': '/src/app/images/liked-inactive.svg'" alt="Избранное">
                </button>
                <div class="track-details__time" v-if="isTrackTime">
                    {{ isTrackTime }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tracks{
    .track{
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 20px;
        border-radius: 8px;

        &:hover{
            background-color: #2A2929;
        }

        .item{
            display: flex;
            align-items: center;
            padding: 20px 0;

            div{
                margin-left: 14px;
                cursor: pointer;
            }

            &-img{
                img{
                    width: 50px;
                    height: 50px;

                    border-radius: 6px;
                    box-shadow: 14px 0 22px 0 rgba(0, 0, 0, 0.25);
                }
            }

            &-name{
                display: flex;
                flex-direction: column;
                row-gap: 10px;

                p{
                    width: 230px;
                }

                &__title{
                    font-weight: 700;
                    font-size: 20px;
                }

                .active{
                    color: #08D67F;
                }

                &__subtitle{
                    font-weight: 500;
                    font-size: 18px;
                    color: #d0d0d0;
                }
            }
        }

        &-details{
            display: flex;
            align-items: center;

            &__like{
                margin: 0 16px;
            }

            &__time{
                font-size: 16px;
                color: #7d7d7d;
            }
        }
    }

}
</style>