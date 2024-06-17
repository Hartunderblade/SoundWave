<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let openMenu = ref(false)

const router = useRouter();

// const props = defineProps({
//     text: String,
//     textSize: Number,
//     background: String
// })
</script>


<template>
        <div  class="profil">
            <p class="profil__text">Имя</p>
            <img v-if="!openMenu" @click="openMenu = true" class="profil__img" src="@/app/images/arrow-profile.svg" alt="Arrow down">
            <img v-else @click="openMenu = false" class="profil__img" src="@/app/images/arrow-profile-up.svg" alt="Arrow up">
        </div>
        <div class="profil-menu" v-if="openMenu">
            <p  class="profil-menu__text" @click="router.push({ name: 'Login' })">Выйти в окно</p>
        </div>
</template>



<style lang="scss" scoped>

    .profil{
        display: flex;
        align-items: center;
        gap: 16px;

        background: rgba(0, 0, 0, 0.58);
        padding: 14px 30px;
        border-radius: 30px;

        cursor: pointer;

        // margin-left: 50px;

        &__text{
            font-weight: 700;
            font-size: 20px;
        }

        &__img{
            width: 16px;
            height: 16px;
        }
    }

    .profil-menu{

        position: absolute;
        // width: 190px;
        // background: #282828;
        // height: 75px;
        top: 74px;
        right: 35px;
        // padding: 1px;
        
        border: 1px solid #c0c0c02a;

        background:rgba(0, 0, 0, 0.58);

        border-radius: 10px;

        &__text{
            font-weight: 400;
            font-size: 18px;

            cursor: pointer;

            padding: 14px 18px;

            &:hover{
                background:#171717;
                border-radius: 10px;
                transition: 0.2s;
            }
        }
    }


    // .profil-menu{
  //         position: fixed;
  //         width: 190px;
  //         background: #282828;
  //         height: 75px;
  //         top: 74px;
  //         right: 35px;
  //         padding: 1px;
  //         cursor: pointer;

  //         display: flex;
  //         flex-direction: column;
          

  //         &__text{
  //             font-weight: 600;
  //             font-size: 16px;

  //             margin: 10px;
  //         }
  //     }

</style>