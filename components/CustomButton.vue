<template>
  <button
    class="button"
    :class="[animationClass]"
    :style="customStyles"
    :title="title"
    style="border-radius: 8px;"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handler"
  >
    <slot>{{ title }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Button'
    },
    handler: {
      type: Function,
      required: true,
      default: (e) => {
        // eslint-disable-next-line no-console
        console.log(`clicked on ${e.target.title}`);
      }
    },
  },
  data() {
    return {
      customStyles: {},
      animationClass: ''
    };
  },
  methods: {
    handleMouseEnter(event) {
      const initialWidth = event.target.offsetWidth;
      const initialHeight = event.target.offsetHeight;
      const initialBorderRadius = event.target.style.borderRadius;
      // eslint-disable-next-line no-console
      console.log('initialBorderRadius', initialBorderRadius, '\ninitialWidth', initialWidth, '\ninitialHeight', initialHeight);

      this.customStyles = {
        '--initial-width': `${initialWidth}px`,
        '--initial-height': `${initialHeight}px`,
        '--initial-border-radius': initialBorderRadius,
        '--biggest-size': `${Math.max(initialWidth, initialHeight)}px`,
      };

      this.animationClass = 'resizing';
    },
    handleMouseLeave() {
      this.customStyles = {};
      this.animationClass = '';
    }
  }
};
</script>

<style>

button:not(.details-button) {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.button {
  border-left: 1px solid cyan;
  border-right: 1px solid rgb(255, 0, 191);
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  position: relative;
  font-size: inherit;
  color: transparent;
  background: linear-gradient(45deg, cyan, violet);
  z-index: 0;
  transform: scaleY(1.05);
  border-radius: 0.5rem;
}

button::after, .button::after {
  color: white;
  position: absolute;
  content: attr(title);
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  padding: inherit;
  width: 100%;
  height: 100%;
  align-content: center;
  line-height: inherit;
  justify-content: center;
  font-size: inherit;
  text-shadow: 1px 0 0.5px rgba(255, 0, 191, 0.68) !important;
  text-align: center;
  z-index: 2;
  background-color: inherit;
  border-radius: 0.5rem;
  transform: scaleY(0.96);
}

button::before, .button::before {
  color: white;
  position: absolute;
  content: attr(title);
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  padding: inherit;
  width: 100%;
  height: 100%;
  align-content: center;
  line-height: inherit;
  justify-content: center;
  font-size: inherit;
  text-shadow: -1px 0 0.5px rgba(0, 191, 255, 0.68) !important;
  text-align: center;
  z-index: 3;
  border-radius: 0.5rem;
  transform: scaleY(0.96);
}

@keyframes rotateGradient {
  0% {
    background: linear-gradient(45deg, cyan, violet);
    background-blend-mode: normal;
  }
  4% {
    background: linear-gradient(30.6deg, cyan, violet);
    background-blend-mode: difference;
  }
  8% {
    background: linear-gradient(16.2deg, cyan, violet);
    background-blend-mode: exclusion;
  }
  12% {
    background: linear-gradient(1.8deg, cyan, violet);
    background-blend-mode: soft-light;
  }
  16% {
    background: linear-gradient(-12.6deg, cyan, violet);
    background-blend-mode: darken;
  }
  20% {
    background: linear-gradient(-27deg, cyan, violet);
    background-blend-mode: lighten;
  }
  24% {
    background: linear-gradient(-41.4deg, cyan, violet);
  }
  28% {
    background: linear-gradient(-55.8deg, cyan, violet);
    background-blend-mode: difference;
  }
  32% {
    background: linear-gradient(-70.2deg, cyan, violet);
    background-blend-mode: exclusion;
  }
  36% {
    background: linear-gradient(-84.6deg, cyan, violet);
    background-blend-mode: soft-light;
  }
  40% {
    background: linear-gradient(-99deg, cyan, violet);
    background-blend-mode: darken;
  }
  44% {
    background: linear-gradient(-113.4deg, cyan, violet);
    background-blend-mode: lighten;
  }
  48% {
    background: linear-gradient(-127.8deg, cyan, violet);
    background-blend-mode: hard-light;
  }
  52% {
    background: linear-gradient(-142.2deg, cyan, violet);
    background-blend-mode: difference;
  }
  56% {
    background: linear-gradient(-156.6deg, cyan, violet);
    background-blend-mode: exclusion;
  }
  60% {
    background: linear-gradient(-171deg, cyan, violet);
    background-blend-mode: soft-light;
  }
  64% {
    background: linear-gradient(-185.4deg, cyan, violet);
    background-blend-mode: darken;
  }
  68% {
    background: linear-gradient(-199.8deg, cyan, violet);
    background-blend-mode: lighten;
  }
  72% {
    background: linear-gradient(-214.2deg, cyan, violet);
    background-blend-mode: hard-light;
  }
  76% {
    background: linear-gradient(-228.6deg, cyan, violet);
    background-blend-mode: difference;
  }
  80% {
    background: linear-gradient(-243deg, cyan, violet);
    background-blend-mode: exclusion;
  }
  84% {
    background: linear-gradient(-257.4deg, cyan, violet);
    background-blend-mode: soft-light;
  }
  88% {
    background: linear-gradient(-271.8deg, cyan, violet);
    background-blend-mode: darken;
  }
  92% {
    background: linear-gradient(-286.2deg, cyan, violet);
    background-blend-mode: lighten;
  }
  96% {
    background: linear-gradient(-300.6deg, cyan, violet);
    background-blend-mode: hard-light;
  }
  100% {
    background: linear-gradient(-315deg, cyan, violet);
    background-blend-mode: normal;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}

@keyframes resizing {
  0% {
    border-radius: var(--initial-border-radius);
    height: var(--initial-height);
    width: var(--initial-width);
  }
  50% {
    border-radius: calc(var(--biggest-size) / 2);
    height: var(--biggest-size);
    width: var(--biggest-size);
  }
  100% {
    border-radius: var(--initial-border-radius);
    height: var(--initial-height);
    width: var(--initial-width);
  }
}

.button:hover {
  animation: resizing 1500ms, rotation 1500ms, rotateGradient 1500ms; /* Disable the default hover animation */
}
</style>
