<template>
  <div class="icon-links">
    <a href="https://www.linkedin.com/in/bogdanovvad1m/" target="_blank" rel="noopener noreferrer">
      <img src="./../assets/linkedin40x40.svg" alt="my linkedin link">
    </a>
    <a href="https://github.com/8ogdanovv/" target="_blank" rel="noopener noreferrer">
      <img src="./../assets/github40x40.svg" alt="my git-hub link">
    </a>
    <a href="https://www.facebook.com/bogdanovvad1m/" target="_blank" rel="noopener noreferrer">
      <img src="./../assets/facebook40x40.svg" alt="my facebook link">
    </a>
  </div>
</template>

<style>
.icon-links {
  position: fixed;
  bottom: 1rem;
  z-index: 0;
}

@media (orientation: landscape) {
  .icon-links {
    align-self: center;
  }
}

@media (orientation: portrait) {
  .icon-links {
    align-self: flex-end;
    justify-self: flex-end;
    display: flex;
    align-items: flex-end;
  }
}
</style>
