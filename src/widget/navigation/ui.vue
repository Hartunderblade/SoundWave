<script setup>
import ProfilMenu from '@/widget/profilMenu/ui.vue';
</script>

<template>
  <div class="nav">
    <div class="nav-item">
      <!-- <form>
      <img src="@/app/images/search-input.svg" alt="">
      <input type="serch" placeholder="Что ты хочешь послушать?">
    </form> -->
    <ProfilMenu/>
    </div>
    
    
  </div>
</template>

<style lang="scss" scoped>
    .nav{
      margin: 30px 20px 40px 20px;
        .nav-item{
          display: flex;
          align-items: center;
          justify-content: end;        

          form {
          display: flex;
          align-items: center;
          width: 360px;

          background: #ffffff;
          border-radius: 100px;

          cursor: pointer;

          img{
            width: 24px;
            height: 24px;
            cursor: pointer;
            margin: 0 10px;
          }

          input{
            height: 42px;
            outline: none;
            color: #4E4E4E;
          }
        }
        }
        
    }
</style>