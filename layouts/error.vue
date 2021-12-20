<template>
<main class="error">
  <h1>{{ error.statusCode }}</h1>
  <div class="message">{{ error.message }}</div>
  <div class="actions">
    <a class="a-text" href="/">Home</a>
  </div>
</main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/common';

main.error {
  position: relative;
  margin: 1rem;
  h1 {
    margin: 1.5rem 0 1rem;
  }
  > .message {
    margin: 1rem 0;
  }
}
</style>
