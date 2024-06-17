<script setup>
import Logo from '@/shared/logo/ui.vue';
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import MenuHover from '@/shared/menuHover/ui.vue';
import ProfilMenu from '@/widget/profilMenu/ui.vue';
import Navigation from '@/widget/navigation/ui.vue';

let openModal = ref(false);
</script>

<template>
    
    <div class="menu">
        
    <div class="menu__logo">
        <Logo/>
    </div>
    <div class="menu-items">
        <div class="menu-link">
            <RouterLink to="/">
                <MenuHover :iconSize="30" name="Главная" iconString="home" pageUrl="/home" />
            </RouterLink>
            <RouterLink to="/search">
                <MenuHover :iconSize="30" name="Поиск" iconString="search" pageUrl="/search" />
            </RouterLink>
            <!-- <RouterLink to="/library">
                <MenuHover :iconSize="30" name="Библиотека" iconString="library" pageUrl="/library" />
            </RouterLink> -->
            <MenuHover @click="$router.push({ name: 'Like' })" :iconSize="30" name="Избранное" iconString="liked" pageUrl="/like" /> 
        </div>
        <div class="menu-link">
            

        </div>
        
  </div>
  </div>
  
  
</template>


<style lang="scss" scoped>
    .menu{
        // background: #000000;
        // height: 100vh;
        // padding: 50px 112px 0 70px;

        position: fixed;
        border-radius: 0 40px 40px 0;

        background-color: black;
    // position: relative;
    width: 360px;
    left: 0;
    bottom: 0;
    top: 0;
    font-size: 16px;
    font-weight: 500;
    height: 100vh;
    // padding: 20px;
    padding: 30px 0 0 60px;
    display: flex;
    flex-direction: column;

        &__logo{
            width: 152px;
            height: 65px;
        }

        .menu-items{
            margin-top: 65px;

            display: flex;
            flex-direction: column;
            gap: 60px;

            .menu-link{
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
        }
    }

    // .nav{
    //     display: flex;
    //     gap: 20px;

    // }
</style>