/* eslint-disable no-console */
import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

async function searchCocktailByName(name) {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching cocktail by name:', error);
    throw error;
  }
}

async function listCocktailsByFirstLetter(letter) {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error listing cocktails by first letter:', error);
    throw error;
  }
}

async function searchIngredientByName(name) {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?i=${name}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching ingredient by name:', error);
    throw error;
  }
}

async function lookupCocktailById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error looking up cocktail by ID:', error);
    throw error;
  }
}

async function lookupIngredientById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?iid=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error looking up ingredient by ID:', error);
    throw error;
  }
}

async function getRandomCocktail() {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data;
  } catch (error) {
    console.error('Error getting random cocktail:', error);
    throw error;
  }
}

async function searchByIngredient(ingredient) {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching by ingredient:', error);
    throw error;
  }
}

async function filterByAlcoholic(alcoholic) {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?a=${alcoholic}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error filtering by alcoholic:', error);
    throw error;
  }
}

async function filterByCategory(category) {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error filtering by category:', error);
    throw error;
  }
}

async function filterByGlass(glass) {
  console.log(glass, 'filter glass')
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?g=${glass}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error filtering by glass:', error);
    throw error;
  }
}

async function listCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error listing categories:', error);
    throw error;
  }
}

async function listGlasses() {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?g=list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error listing glasses:', error);
    throw error;
  }
}

async function listIngredients() {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?i=list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error listing ingredients:', error);
    throw error;
  }
}

async function listAlcoholicFilters() {
  try {
    const response = await axios.get(`${BASE_URL}/list.php?a=list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error listing alcoholic filters:', error);
    throw error;
  }
}

export default {
  searchCocktailByName,
  listCocktailsByFirstLetter,
  searchIngredientByName,
  lookupCocktailById,
  lookupIngredientById,
  getRandomCocktail,
  searchByIngredient,
  filterByAlcoholic,
  filterByCategory,
  filterByGlass,
  listCategories,
  listGlasses,
  listIngredients,
  listAlcoholicFilters,
};
