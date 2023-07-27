<template>
  <div class="search-results">
    <DetailsModal
      v-if="cocktailDetails"
      :cocktail="cocktailDetails"
      @close="closeDetailsModal"
    />

    <h3>Search results</h3>

    <div
      v-if="searchResults"
      class="flex-wrap"
      :style="{ zIndex: cocktailDetails ? '-5' : '0' }"
    >
      <div v-for="(item, index) in visibleResults" :key="index">
        <!-- Pass the handler function wrapped in a function -->
        <ItemCard :item="item" :show-details="() => showDetailsModal(item.idDrink)" />
      </div>

      <div v-if="showMoreButtonVisible" class="show-more">
        <CustomButton
          :handler="showMore"
          title="Show More"
        ></CustomButton>
      </div>
    </div>

    <div v-else>
      No results found.
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';
import CustomButton from '~/components/CustomButton.vue';
import DetailsModal from '@/components/DetailsModal.vue';

export default {
  components: {
    ItemCard,
    CustomButton,
    DetailsModal,
  },
  data() {
    return {
      visibleCount: 6,
    };
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
    visibleResults() {
      return this.searchResults ? this.searchResults.slice(0, this.visibleCount) : [];
    },
    showMoreButtonVisible() {
      return this.searchResults && this.searchResults.length > this.visibleCount;
    },
    cocktailDetails() {
      return this.$store.state.cocktailDetails;
    },
  },
  methods: {
    showMore() {
      this.visibleCount += 6;
    },
    showDetailsModal(idDrink) {
      this.$store.dispatch('getCocktailById', idDrink);
    },
    closeDetailsModal() {
      this.$store.commit('SET_COCKTAIL_DETAILS', null);
    },
  },
};
</script>

<style>

.search-results {
  position: relative;
  z-index: 3;
  background-image: url('./../assets/AnnualPiercingHare-size_restricted.gif');
  background-image: url('./../assets/tumblr_inline_p7hyycKLlY1t3it1g_500.gif');
  background-image: url('./../assets/a4b78215fcca86f701a52f9cb15810df.gif');
  background-size: contain;
  max-width: 100%;
  background-position: center;
  min-height: calc(100dvh - 74px);
}

h3 {
  margin: 0;
  padding: 0;
  text-align: justify;
}

.flex-wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
}

.show-more {
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

</style>
