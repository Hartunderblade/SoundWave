<script setup>
import ProfilMenu from '@/widget/profilMenu/ui.vue';
</script>

<template>
  <div class="nav">
    <div class="nav-item">
      <form>
      <img src="@/app/images/search-input.svg" alt="">
      <input type="serch" placeholder="Что ты хочешь послушать?">
    </form>
    <ProfilMenu/>
    </div>
    
    
  </div>
</template>

<style lang="scss" scoped>
    .nav{
        

        // padding: 20px 70px ;
        // // gap: 20px;

        // background: rgba(0, 0, 0, 0.29);
        // position: absolute;
        // right: 0;
        // left: 0;
        // top: 0;

        

        // margin: 0 70px;
        // margin-bottom: 80px;
        .nav-item{
        //   display: flex;
        // align-items: center;
        // justify-content: center;
        
        // column-gap: 600px;
        // width: 100%;
          form {
          // position: relative;
          display: flex;
          align-items: center;
          width: 360px;
          // margin: 0 auto;

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