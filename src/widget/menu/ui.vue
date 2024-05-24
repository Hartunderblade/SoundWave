<script setup>
import Logo from '@/shared/logo/ui.vue';
import { RouterLink, RouterView } from 'vue-router';
// import { ref } from 'vue';
import MenuHover from '@/shared/menuHover/ui.vue';
import ProfilMenu from '@/widget/profilMenu/ui.vue';
import Navigation from '@/widget/navigation/ui.vue';
import ModalCreate from '@/widget/modalCreate/ui.vue';
</script>

<template>
    <!-- <ModalCreate/> -->
    <div class="menu">
        
    <div class="menu__logo">
        <Logo/>
    </div>
    <div class="menu-items">
        <div class="menu-link">
            <RouterLink to="/">
                <MenuHover :iconSize="30" name="Home" iconString="home" pageUrl="/home" />
            </RouterLink>
            <RouterLink to="/search">
                <MenuHover :iconSize="30" name="Search" iconString="search" pageUrl="/search" />
            </RouterLink>
            <RouterLink to="/library">
                <MenuHover :iconSize="30" name="Library" iconString="library" pageUrl="/library" />
            </RouterLink>
        </div>
        <div class="menu-link">
                <MenuHover :iconSize="30" name="Создать плейлист" iconString="playlist" pageUrl="/playlist" />
            <RouterLink to="/like">
                <MenuHover :iconSize="30" name="Избранное" iconString="liked" pageUrl="/liked" />
            </RouterLink>
        </div>
  </div>
  
  </div>
  
  
</template>


<style lang="scss" scoped>
    .menu{
        // background: #000000;
        // height: 100vh;
        // padding: 50px 112px 0 70px;

        background-color: black;
    position: relative;
    width: 300px;
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