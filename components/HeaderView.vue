<template>
  <header class="header" :style="headerStyle" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="logo">
      <img src="../assets/favicon.png" alt="logo" class="logo-image">
      <span>-cocktail</span>
    </div>
    <div class="buttons">
      <CustomButton title="❤ My list"></CustomButton>
      <CustomButton title="+ Add new"></CustomButton>
      <CustomButton title="Log Out"></CustomButton>
    </div>
  </header>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  components: {
    CustomButton
  },
  data() {
    return {
      headerStyle: {
        position: 'sticky',
        top: 0,
        opacity: 1,
        transition: 'opacity 500ms',
      }
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const offsetY = window.scrollY;
      this.headerStyle.opacity = '0.8';

      if (offsetY === 0) {
        this.headerStyle.opacity = '1';
      }
    },
    handleMouseEnter() {
      this.headerStyle.opacity = '1';
    },
    handleMouseLeave() {
      if (window.scrollY !== 0) {
        this.headerStyle.opacity = '0.8';
      } else {
        this.headerStyle.opacity = '1';
      }
    },
  }
};
</script>

<style>

header {
  z-index: 100;
  background: black;
  background: linear-gradient(45deg, violet, cyan);
  background-image: url('./../assets/a4b78215fcca86f701a52f9cb15810df.gif');
  background-image: url('./../assets/a4b78215fcca86f701a52f9cb15810df.gif');
  background-image: url('./../assets/tumblr_inline_p7hyycKLlY1t3it1g_500.gif');
  background-size: contain;
  color: white;
  display: flex;
  height: 74px;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}

@media (min-width: 768px) {
  header {
    padding: 0 108px;
  }
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.logo-image {
  width: 44px;
  height: 44px;
}

.header-button {
  height: 2.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 100%;
  color: whitesmoke;
}

.logout {
  border: 1px solid white;
  border-radius: 0.5rem;
  color: whitesmoke;
}

.buttons {
  display: flex;
  gap: 1rem;
}

</style>
