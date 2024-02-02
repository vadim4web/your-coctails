<template>
  <div class="details-wrapper">
    <div class="details-modal">
      <h2 class="item-card__title">{{ cocktail.strDrink }}</h2>
      <div class="cocktail-details">

      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="cocktail-image" />

      <div class="main-info">
        <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
        <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
        <p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
      </div>

      <div class="recipe">
        <div class="ingredients">
          <p><strong>Ingredients:</strong></p>
          <ul>
            <!-- Use a loop to render each ingredient -->
            <li v-for="ingredientIndex in 15" :key="ingredientIndex">
              <!-- Check if either measurement or ingredient is present before rendering -->
              <span v-if="cocktail['strMeasure' + ingredientIndex] || cocktail['strIngredient' + ingredientIndex]">
                {{ cocktail['strMeasure' + ingredientIndex] }} {{ cocktail['strIngredient' + ingredientIndex] }}
              </span>
            </li>
          </ul>
        </div>

        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <p>{{ getInstructions() }}</p>
        </div>

        </div>
      </div>
      <CustomButton title="Close details" :handler="closeModal" />
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    getInstructions() {
      // Create an array of possible instruction properties
      const instructionProperties = [
        'strInstructions',
        'strInstructionsES',
        'strInstructionsDE',
        'strInstructionsFR',
        'strInstructionsIT',
        'strInstructionsZH-HANS',
        'strInstructionsZH-HANT',
      ];

      // Find the first non-empty instruction from the properties
      const instruction = instructionProperties.find(prop => this.cocktail[prop] && this.cocktail[prop].trim() !== '');

      // Return the instruction if found, otherwise, return the default message
      return instruction ? this.cocktail[instruction] : 'There are no instructions for this cocktail - so you might experiment and apply your creativity to make it';
    },
  },
};
</script>

<style>
.details-wrapper {
  position: fixed;
  top: 74px;
  left: 0;
  z-index: 100 !important;
  width: 100vw;
  height: calc(100dvh - 74px);
  background: #00000088 !important;
}

.details-modal {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 9;
  max-width: 90%;
  height: calc((100dvh - 74px) * 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #0008;
  box-shadow: 0 0 10vmax #00000088;
}

.cocktail-details {
  width: 100%;
  text-align: center;
  display: flex;
}

.main-info {
  align-self: center;
  flex-grow: 1;
}

.recipe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

@media (orientation: landscape) {
  .cocktail-image {
    display: block;
    max-width: 25vw;
    height: 25vw;
    align-self: start;
    justify-self: flex-start;
  }

  .cocktail-details {
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
  }

}
@media (orientation: portrait) {
  .cocktail-details {
    flex-direction: column;
  }

  .cocktail-image {
    width: 50vmin;
    height: 50vmin;
    margin-bottom: 10px;
    align-self: center;
    justify-self: flex-start;
  }
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}
</style>
