<script setup>
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

import Menu from '@/widget/menu/ui.vue';
</script>

<template>
    <main class="container">
        <Menu/>
        <RouterView/>
    </main>
    
  <!-- <div class="wrapper">
        <Menu/>
    <div class="container">
        <RouterView/>
    </div>
    </div> -->

    <!-- <MusicPlayer/> -->

    
</template>

<style scoped>

</style>
