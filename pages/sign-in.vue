<!-- sign-in.vue -->
<template>
  <div class="page-centered">
    <form @submit.prevent="signIn" class="form">
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
          <label for="signInEmail">Email:</label>
          <input id="signInEmail" v-model="signInEmail" type="email" required>
        </div>
        <div class="input">
          <label for="signInPassword">Password:</label>
          <input id="signInPassword" v-model="signInPassword" type="password" required>
        </div>
      </div>
      <CustomButton title="Sign In"></CustomButton>
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
      signInEmail: '',
      signInPassword: ''
    };
  },
  methods: {
  }
};
</script>
