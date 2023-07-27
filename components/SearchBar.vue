<template>
  <div class="search-bar">
    <h2>Search by</h2>

    <div class="flex-col">
      <div class="flex-row">
        <b-form-radio
          v-model="selectedFilter"
          name="searchBy"
          value="title"
          class="radio-input"
        >
          Title
        </b-form-radio>
      </div>

      <b-form-input
        v-model="searchByTitle"
        type="search"
        name="byTitle"
        :disabled="selectedFilter !== 'title'"
        class="filter-input"
      >
      </b-form-input>
    </div>

    <div class="flex-col">
      <div class="flex-row">
        <b-form-radio
          v-model="selectedFilter"
          name="searchBy"
          value="category"
          class="radio-input"
        >
          Category
        </b-form-radio>
      </div>

      <b-form-select
        v-model="selectedCategory"
        :disabled="selectedFilter !== 'category'"
        :options="categoriesOptions"
        class="filter-input"
      >
      </b-form-select>
    </div>

    <div class="flex-col">
      <div class="flex-row">
        <b-form-radio
          v-model="selectedFilter"
          name="searchBy"
          value="glasses"
          class="radio-input"
        >
          Glasses
        </b-form-radio>
      </div>

      <b-form-select
        v-model="selectedGlasses"
        :disabled="selectedFilter !== 'glasses'"
        :options="glassesOptions"
        class="filter-input"
      >
      </b-form-select>
    </div>

    <div class="flex-col">
      <div class="flex-row">
        <b-form-radio
          v-model="selectedFilter"
          name="searchBy"
          value="ingredient"
          class="radio-input"
        >
          Ingredient
        </b-form-radio>
      </div>

      <b-form-select
        v-model="selectedIngredient"
        :disabled="selectedFilter !== 'ingredient'"
        :options="ingredientsOptions"
        class="filter-input"
      >
      </b-form-select>
    </div>

    <div class="flex-col">
      <div class="flex-row">
        <b-form-radio
          v-model="selectedFilter"
          name="searchBy"
          value="alcoholic"
          class="radio-input"
        >
          Alcoholic
        </b-form-radio>
      </div>

      <b-form-select
        v-model="selectedAlcoholic"
        :disabled="selectedFilter !== 'alcoholic'"
        :options="alcoholicOptions"
        class="filter-input"
      >
      </b-form-select>
    </div>

    <div class="buttons flex-row">
      <CustomButton
        :handler="setDefault"
        title="Reset"
      >
      </CustomButton>

      <CustomButton
        :handler="performSearch"
        title="Submit"
      >
      </CustomButton>
    </div>

    <div class="images">
      <div class="image-container">
        <img src="./../assets/20230122-63cccdd7eb688_recipe_images.gif" alt="coctail">
      </div>

      <div class="image-container lemon">
        <img src="./../assets/20230122-63cccdd4ed305_recipe_images.gif" alt="lemon">
      </div>

      <div class="image-container">
        <img src="./../assets/20230122-63cccdd6abf11_recipe_images.gif" alt="shaker">
      </div>
    </div>

  </div>
</template>

<script>
import filterNullish from '../utils/filterNullish';
import capitalizeWords from '../utils/capitalizeWords';
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      selectedFilter: 'title',
      searchByTitle: '',
      selectedCategory: '',
      selectedIngredient: '',
      selectedGlasses: '',
      selectedAlcoholic: '',
      categories: [],
      glasses: [],
      ingredients: [],
      alcoholicFilters: []
    };
  },
  computed: {
    categoriesOptions() {
      return this.categories.map(category => ({
        value: category.strCategory,
        text: category.strCategory
      }));
    },
    glassesOptions() {
      return this.glasses.map(glass => ({
        value: glass.strGlass,
        text: capitalizeWords(glass.strGlass),
      }));
    },
    ingredientsOptions() {
      return this.ingredients.map(ingredient => ({
        value: ingredient.strIngredient1,
        text: capitalizeWords(ingredient.strIngredient1),
      }));
    },
    alcoholicOptions() {
      return this.alcoholicFilters.map(alcoholic => ({
        value: alcoholic.strAlcoholic,
        text: alcoholic.strAlcoholic
      }));
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
    this.fetchCategories();
    this.fetchGlasses();
    this.fetchIngredients();
    this.fetchAlcoholicFilters();
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const offsetY = window.scrollY;
      this.searchBarStyle.top = `${offsetY}px`;
    },
    async performSearch() {
      try {
        const filter = this.selectedFilter;
        let query = '';

        if (filter === 'title') {
          query = this.searchByTitle;
          const results = await this.$searchCocktailByName(query);
          const filteredResults = filterNullish(results.drinks);
          this.$store.commit('SET_SEARCH_RESULTS', filteredResults);
        } else if (filter === 'category') {
          query = this.selectedCategory;
          const results = await this.$filterByCategory(query);
          const filteredResults = filterNullish(results.drinks);
          this.$store.commit('SET_SEARCH_RESULTS', filteredResults);
        } else if (filter === 'glasses') {
          query = this.selectedGlasses;
          const results = await this.$filterByGlass(query);
          const filteredResults = filterNullish(results.drinks);
          this.$store.commit('SET_SEARCH_RESULTS', filteredResults);
        } else if (filter === 'ingredient') {
          query = this.selectedIngredient;
          const results = await this.$searchByIngredient(query);
          const filteredResults = filterNullish(results.drinks);
          this.$store.commit('SET_SEARCH_RESULTS', filteredResults);
        } else if (filter === 'alcoholic') {
          query = this.selectedAlcoholic;
          const results = await this.$filterByAlcoholic(query);
          const filteredResults = filterNullish(results.drinks);
          this.$store.commit('SET_SEARCH_RESULTS', filteredResults);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    setDefault() {
      this.selectedFilter = 'title';
      this.searchByTitle = '';
      this.selectedCategory = '';
      this.selectedIngredient = '';
      this.selectedGlasses = '';
      this.selectedAlcoholic = '';
      this.performSearch();
    },
    async fetchCategories() {
      try {
        const response = await this.$listCategories();
        this.categories = (response.drinks || []).sort((a, b) => {
          if (
            a.strCategory === 'Other / Unknown'
            && b.strCategory !== 'Other / Unknown'
            ) {
            return 1;
          } else if (
            a.strCategory !== 'Other / Unknown'
            && b.strCategory === 'Other / Unknown'
            ) {
            return -1;
          } else {
            return a.strCategory.localeCompare(b.strCategory);
          }
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async fetchIngredients() {
      try {
        const response = await this.$listIngredients();
        this.ingredients = (response.drinks || [])
          .sort((a, b) => a.strIngredient1.localeCompare(b.strIngredient1));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async fetchGlasses() {
      try {
        const response = await this.$listGlasses();
        this.glasses = response.drinks || [];
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async fetchAlcoholicFilters() {
      try {
        const response = await this.$listAlcoholicFilters();
        this.alcoholicFilters = response.drinks || [];
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  }
};
</script>

<style>

.images {
  opacity: 0.3;
  position: fixed;
  top: calc(74px + 1rem);
  left: 1rem;
  z-index: 0;
  width: inherit;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.image-container > img {
  width: 15vw;
  height: 15vw;
  display: block;
}

.image-container.lemon {
  align-self: flex-end;
  margin-right: 1rem;
}

.search-bar {
  display: flex;
  flex-direction: column;
  width: inherit;
  position: fixed;
  top: 74px;
  left: 0;
  right: 0;
  padding: 1.5rem;
}

.search-bar > * {
  flex-shrink: 0;
}

h2 {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 100%;
}

.flex-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.buttons {
  z-index: 2;
}

.flex-row {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.flex-row > label {
  line-height: 100%;
}

.radio-input {
  width: 1.5rem;
  height: 1.5rem;
}

label {
  display: flex;
  align-items: center;
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
}

.flex-col > .filter-input {
  position: relative;
  border-radius: 0.5rem;
}

.input, .filter-input {
  border-left: 1px solid cyan !important;
  border-right: 1px solid rgb(255, 0, 191) !important;
}

label.custom-control-label::after {
  border-left: 1px solid cyan !important;
  border-right: 1px solid rgb(255, 0, 191) !important;
  border-radius: 50%;
}

@media (orientation: landscape) {
  .flex-col > .filter-input {
    width: calc(35vw - 7rem);
    width: 100%;
    height: 3rem;
  }

  .search-bar {
    gap: 0.5rem;
  }

  .flex-col {
    height: 4rem;
  }
}

@media (orientation: portrait) {
  .flex-col > .filter-input {
    width: calc(100vw - 60vmin - 7rem);
    width: 100%;
    height: 3.5rem;
  }

  .search-bar {
    gap: 1.5rem;
  }


  .flex-col {
    height: 92px;
  }

  .image-container {
    transform: translate(3vw, 15vw);
  }
}

.buttons, .search-button {
  height: 2.5rem;
}

button {
  z-index: 1;
  padding: 0.5rem 1rem;
}
</style>
