<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Plates from "@/shared/plates/ui.vue";

const router = useRouter();
const startValidation = ref(false);

const login = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');


const RegisterUser = () => {
  startValidation.value = true;

  if(isValidEmail.value == true && isStronPassword.value == true){
    // api

    alert('вы зарег!!!')

  }
}

const isValidLogin = computed(() => {
  return startValidation.value ? /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/.test(login.value) : null;
});

const isValidEmail = computed(() => {
  return startValidation.value ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) : null;
});

const isStronPassword = computed(() => {
  return startValidation.value ? /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(password.value) : null;
});

const isPasswordConfirmed = computed(() => {
 return startValidation.value ? password.value == confirmPassword.value : null;
});




</script>

<template>
<main class="container-form">
    <nav class="navigation">
      <img src="@/app/images/logo-2.svg" alt="Логотип">
    </nav>
    <section class="wrapper">
      <Plates/>
      <div class="form">
       
        <form @submit.prevent="signup">
          <h2 class="form__text">Регистрация</h2> 
          <!-- {{ isValidLogin }} -->
            <div>
              <input
                class="form__input"
                type="text"
                name="login"
                v-model="login"
                placeholder="Логин"
                :class="{ valid : isValidLogin == true, inValid : isValidLogin == false }"
              />
            </div>
            <!-- {{ isValidEmail }} -->
            <div>
              
              <input
                class="form__input"
                type="text"
                name="email"
                v-model="email"
                placeholder="Почта"
                :class="{ valid : isValidEmail == true, inValid : isValidEmail == false }"
              />
            </div>
            <!-- {{isStronPassword}} -->
            <div>
              
              <input
                class="form__input"
                type="password"
                name="password"
                v-model="password"
                placeholder="Пароль"
                :class="{ valid : isStronPassword == true, inValid : isStronPassword == false }"
              />
            </div>
            <!-- {{ isPasswordConfirmed }} -->
            <div>
              <input
                class="form__input"
                type="password"
                name="confirmPassword"
                v-model="confirmPassword"
                placeholder="Подтвердите пароль"
                :class="{ valid : isPasswordConfirmed == true, inValid : isPasswordConfirmed == false }"
              />
            </div>
            <input @click="RegisterUser" class="form__button" type="submit" value="Зарегистрироваться" />
            <p style="cursor: pointer;" @click="router.push({ name: 'Login' })" class="form-link__text" >У вас уже есть аккаунт? <span style="color: #08D67F; font-size: 18px; font-weight: 600;">Войдите</span></p>
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
      height: 60px;

      padding: 12px 16px;

      border-radius: 30px;
      border: 1px solid #08D67F;
      outline: #019658;

      color: #000;

      
    }
    .valid{
        border: 2px solid #06c374; 
        // background-color: #baffe1;
      }

      .inValid{
        border: 2px solid #c40837; 
        background-color: #ffdfe8;
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