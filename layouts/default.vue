<!-- layouts/default.vue -->
<template>
  <div class="relative default-layout">

    <HeaderView v-if="$route.path !== '/sign-in' && $route.path !== '/register'" />

    <div class="flex">
      <div v-if="$route.path === '/'">
        <SideBar />
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import HeaderView from '~/components/HeaderView.vue';
import SideBar from '~/components/SideBar.vue';

export default {
  components: {
    HeaderView,
    SideBar,
  },
}
</script>

<style scoped>
.flex {
  display: flex;
}

.relative {
  position: relative;
  z-index: 0;
}
</style>
