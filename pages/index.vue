<!-- pages/index.vue -->
<template>
  <div id="content" class="index">
    <SearchResult/>
  </div>
</template>

<script>
import SearchResult from '~/components/SearchResult.vue';
// import MyList from '~/components/MyList.vue';

export default {
  name: 'IndexPage',
  components: {
    SearchResult,
    // MyList,
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.index {
  background: #F6F6F6;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

</style>
