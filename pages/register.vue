<!-- register.vue -->
<template>
  <div class="page-centered">
    <form @submit.prevent="register" class="form">
      <div class="links">
        <NuxtLink
          to="/sign-in"
          class="link sign-in"
          :class="{ selected: $route.path === '/sign-in' }"
        >
          Sign in
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="link register"
          :class="{ selected: $route.path === '/register' }"
        >
          Register
        </NuxtLink>
      </div>

      <div class="inputs">
        <div class="input">
          <label for="name">Name:</label>
          <input id="name" v-model="name" type="text" required>
        </div>

        <div class="input">
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" required>
        </div>

        <div class="input">
          <label for="password">Password:</label>
          <input id="password" v-model="password" type="password" required>
        </div>

        <div class="input">
          <label for="repeatPassword">Repeat Password:</label>
          <input id="repeatPassword" v-model="repeatPassword" type="password" required>
        </div>
      </div>

      <CustomButton title="Register"></CustomButton>
    </form>
  </div>
</template>
<script>

import CustomButton from '~/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  },
  methods: {
  },
};
</script>

<style>
.page-centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background: #F6F6F6;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 2rem;
  border-radius: 0.5rem;
  background: white;
}
.links {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  width: 11.5rem;
  align-self: center;
  border: 2px solid var(--gray, #FFF);
  background: var(--white, #FFF);
}

.link, .link:hover {
  color: black;
  text-decoration: none;
  font-weight: 500;
}

.sign-in,
.register {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  background: var(--white, #FFF);
  color: black;
}

.sign-in {
  border-radius: 0.5rem 0 0 0.5rem;
}

.register {
  border-radius: 0 0.5rem 0.5rem 0;
}

.selected, .selected:hover {
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  position: relative;
  transform: scale(calc(1.1));
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0 2.5rem 0;
}

.input {
  display: flex;
  flex-direction: column;
  height: 4.75rem;
}

.input label {
  height: 1.75rem;
}

.input input, .form-button, .link {
  height: 2.5rem;
  padding: 0.5rem 1rem;
}

.input input {
  border: 2px solid #b8b8b8;
  border-radius: 0.5rem;

}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active{
  background-color: #FFF;
  box-shadow: inset 0 0 20px 20px #FFF;
}

.form-button {
  color: #FFF;
  border-radius: 0.5rem;
  font-weight: 500;
  background: #b8b8b8;
}
</style>
