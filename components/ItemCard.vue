<template>
  <b-card class="item-card">
    <h4 class="item-card__title">{{ item.strDrink }}</h4>
    <div :style="{ backgroundImage: `url(${item.strDrinkThumb})` }" class="item-card__image"></div>
    <!-- Emit the "show-details" event with the provided handler -->
    <CustomButton :title="item.strDrink + ' details'" :handler="showDetailsModalHandler" />
  </b-card>
</template>

<script>
import CustomButton from '~/components/CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    showDetails: {
      type: Function,
      required: true,
    },
  },
  methods: {
    showDetailsModalHandler() {
      // Call the provided showDetails function, which will emit the "show-details" event with idDrink as the payload
      this.showDetails(this.item.idDrink);
    },
  },
};
</script>

<style>

.item-card {
  background-color: white;
  border-radius: 4px;
  z-index: 0 !important;
  margin: 0.5rem;
}

.item-card__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-break: auto;
  font-weight: bold;

  color: white;
  text-shadow: 0 0 10px black;
  background-color: black;

  border-radius: 0.25rem;
  padding: 1px 2px 3px;
  border-left: 1px solid cyan;
  border-right: 1px solid hsl(315, 100%, 50%);
}

.button {
  height: 2.5rem;
  flex-shrink: 0;
  position: relative;
  z-index: 3;
}

.item-card__image {
  width: 100%;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;

  display: block;
  width: 30vh;
  height: 25vh;
  align-self: center;
  position: relative;
}

.card-body {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  z-index: 0;
}


@media (orientation: landscape) {
  .item-card {
    width: 17vw;
    height: calc(35vh - 1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-card__image {
    display: block;
    width: 30vh;
    align-self: center;
    position: relative;
  }

  .item-card__title {
    font-size: 1rem;
    line-height: 1rem;
    z-index: 1;
  }
  .details-button {
    bottom: 0;
  }
}

@media (orientation: portrait) {
  .item-card {
    width: 30vmin;
    height: calc(45vmin - 1rem);
  }

  .item-card__image {
    width: 100%;
    width: 25vw;
    align-self: center;
    position: relative;
    z-index: -1;
  }

  .item-card__title {
    font-size: 1.25rem;
    line-height: 1.25rem;
    height: 3rem;
    margin-bottom: -1rem;
  }
}
</style>
