<script setup>
import Logo from '@/shared/logo/ui.vue';
import { RouterLink, RouterView } from 'vue-router';
// import { ref } from 'vue';
import MenuHover from '@/shared/menuHover/ui.vue';
import ProfilMenu from '@/widget/profilMenu/ui.vue';
import Navigation from '@/widget/navigation/ui.vue';
</script>

<template>
      <!-- <Menu/>
      <RouterView/>   -->
      <main>
        <!-- <header>
          <nav>
            <div class="menu-items">
        <div class="menu-link">
            <RouterLink to="/home">
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
            <RouterLink to="/playlist">
                <MenuHover :iconSize="30" name="Создать плейлист" iconString="playlist" pageUrl="/playlist" />
            </RouterLink>
            <RouterLink to="/liked">
                <MenuHover :iconSize="30" name="Избранное" iconString="liked" pageUrl="/liked" />
            </RouterLink>
        </div>
  </div>
          </nav>
        </header> -->
        <!-- <section>
          <RouterView/>
        </section> -->
      </main>
  
</template>



<style lang="scss" scoped>

</style>