<template>
<div class="google-doc" v-html="gdoc"></div>
</template>

<script>
export default {
  props: ['gdoc']
}
</script>

<style lang="scss">
.google-doc {
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 0.25rem;
  box-shadow: 0 8px 48px 0 rgba(black, .25);
}
</style>
