<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Logo from "@/shared/logo/ui.vue";
import Plates from "@/shared/plates/ui.vue";


const login = ref('');
const email = ref('');
const password = ref('');
const passwordRepeat = ref('');
const router = useRouter();

const signup = () => {
  const trimLogin = login.value.trim();
  const trimEmail = email.value.trim();
  const trimPassword = password.value.trim();
  const trimPasswordRepeat = passwordRepeat.value.trim();

  if(trimPassword == trimPasswordRepeat){
    console.log('Регистрация прошла успешно');
    router.push({ name: 'login'})
  }
  else{
    console.log('Ошибка! Пароли не совпадают');
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
        <form @submit.prevent="signup">
          <h2 class="form__text">Регистрация</h2>
            <div>
              <input
                class="form__input"
                type="text"
                name="login"
                v-model="login"
                placeholder="Логин"
              />
            </div>
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
            <div>
              <input
                class="form__input"
                type="password"
                name="passwordRepeat"
                v-model="passwordRepeat"
                placeholder="Подтвердите пароль"
              />
            </div>
            <input class="form__button" type="submit" value="Зарегистрироваться" />
            <RouterLink to="/login">
              <p class="form-link__text" >У вас уже есть аккаунт? <span style="color: #08D67F; font-size: 18px; font-weight: 600;">Войдите</span></p>
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
    
    margin-top: 80px;

    

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