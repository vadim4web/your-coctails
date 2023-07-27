<template>
  <div class="page">
    <h1>404 : Not found</h1>
    <div class="logo">
      <img class="logo-image" src="./../assets/favicon.png" alt="">
    </div>
    <footer>
      &copy; 2023 Your-cocktail made with Nuxt by Vadym @vadymche Chervoniak
    </footer>
  </div>
</template>

<script>
// import YourCoctail from '~/assets/'
  export default {

  }
</script>

<style scoped>
  .page {
    height: 100dvh;
  }
  h1 {
    display: block;
    font-size: 200%;
    text-align: center;
  }
  .logo {
    position: relative;
    height: calc(100vh - 6rem);
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: inset 0 0 1rem whitesmoke;
  }

  .logo-image {
    height: calc(100vmin - 8rem);
    margin-bottom: 2.5rem;
    filter: blur(3px);
  }

  h1, footer {
    box-shadow: 0 0 1rem whitesmoke;
  }

  footer {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
