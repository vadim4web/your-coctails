import filterNullish from "~/utils/filterNullish";

export const state = () => ({
  searchResults: null,
  myList: [],
  cocktailDetails: null, // Add new state property for storing detailed cocktail information
});

export const mutations = {
  SET_SEARCH_RESULTS(state, results) {
    state.searchResults = results;
  },
  ADD_TO_MY_LIST(state, cocktail) {
    state.myList.push(cocktail);
  },
  REMOVE_FROM_MY_LIST(state, cocktailId) {
    state.myList = state.myList.filter((cocktail) => cocktail.id !== cocktailId);
  },
  SET_COCKTAIL_DETAILS(state, cocktail) {
    state.cocktailDetails = cocktail; // Mutation to set detailed cocktail information
  },
};

export const actions = {
  async getCocktailById({ commit }, idDrink) {
    try {
      const cocktail = await this.$lookupCocktailById(idDrink);
      const drinkDetails = filterNullish(cocktail.drinks)[0];
      // eslint-disable-next-line no-console
      console.log(drinkDetails);
      commit('SET_COCKTAIL_DETAILS', drinkDetails);
      return drinkDetails;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching cocktail details:', error);
      throw error;
    }
  },
};
