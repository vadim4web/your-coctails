<template>
  <div ref="sidebar" class="side-bar">
    <SearchBar />
    <IconLinks />
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import IconLinks from './IconLinks.vue';

  export default {
    components: {
      SearchBar,
      IconLinks
    },
    mounted() {
      this.setSidebarHeight();
      window.addEventListener('resize', this.setSidebarHeight);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setSidebarHeight);
    },
    methods: {
      setSidebarHeight() {
        const sidebar = this.$refs.sidebar;
        const content = document.querySelector('#content'); // Update the CSS selector

        if (sidebar && content) {
          sidebar.style.height = `${content.scrollHeight}px`;
          // eslint-disable-next-line no-console
          console.log(content.clientHeight);
        }
      }
    },
  }
</script>

<style>

.side-bar {
  width: calc(100vw - 60vmin - 3rem);
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  position: relative;

  background-repeat: no-repeat;
  background-position:
    left top,
    center right,
    left bottom;
  background-size: 50%;
}

.image-container {
  background-repeat: no-repeat;
  background-size: contain;
  flex: 1;
  z-index: -1;
  width: 50%;
  height: 50%;
}

@media (min-width: 768px) {

}

@media (orientation: landscape) {
  .flex-col > .filter-input {
    width: calc(35vw - 7rem);
    width: 100%;
  }

  .side-bar {
    width: calc(100vw - 60vmax - 3rem);
  }
}

@media (orientation: portrait) {
  .flex-col > .filter-input {
    width: calc(100vw - 60vmin - 7rem);
    width: 100%;
  }

  .side-bar {
    width: calc(100vw - 60vmin - 3rem);
  }
}
</style>
