<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Logo from "@/shared/logo/ui.vue";
import Plates from "@/shared/plates/ui.vue";

const email = ref('');
const password = ref('');
const router = useRouter();

const signin = () =>{
  const trimEmail = email.value.trim();
  const trimPassword = password.value.trim();

  if(trimEmail === 'email@gmail.com' && trimPassword === 'pass'){
    console.log('Вход');
    router.push({ name: 'userPage'});
  }
  else{
    console.log('Ошибка! Проверьте почту или пароль');
  }
}


</script>

<template>

  <main class="container-form">
    <nav class="navigation">
      <Logo />
    </nav>
    <section class="wrapper">
      <Plates/>
      <div class="form">
        <form @submit.prevent="signin">
          <h2 class="form__text">Вход</h2>
            <div>
              <input
                class="form__input"
                type="text"
                name="email"
                v-model="email"
                placeholder="Почта"
              />
            </div>
            <div>
              <input
                class="form__input"
                type="password"
                name="password"
                v-model="password"
                placeholder="Пароль"
              />
            </div>
            <input class="form__button" type="submit" value="Войти" />
            <RouterLink to="/signup">
              <p class="form-link__text" >У вас ещё нет аккаунта? <span style="color: #08D67F; font-size: 18px; font-weight: 600;">Зарегистрируйтесь</span></p>
            </RouterLink>
      </form>   
    </div>

    </section>
    
    
  </main>
  
</template>

<style lang="scss">
.container-form{

  .navigation{
    display: flex;
    justify-content: end;

    margin: 40px 0;

  }

  .wrapper{

    .form{
      display: flex;
      justify-content: end;
      text-align: center;
      
      margin-top: 140px;

      

      form{
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        border-radius: 30px;
        padding: 60px;
        background-color: rgba(118, 118, 118, 0.19);
      }

      &__text{
        font-size: 32px;
        margin-bottom: 30px;
      }

      &__input{
        font-size: 14px;
        font-weight: 400;
        width: 380px;
        height: 40px;

        padding: 12px 16px;

        border-radius: 30px;
        border: 1px solid #08D67F;
        outline: #019658;

        color: #000;
      }

      &__button{
        font-size: 20px;
        font-weight: 600;

        background-color: #08D67F;

        padding: 18px 0;
        border-radius: 30px;

        margin: 18px 0 8px 0;
      }
    }
  }

}

</style>