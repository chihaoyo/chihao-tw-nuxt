<template>
<div class="google-doc a-text-parent" v-html="gdoc"></div>
</template>

<script>
export default {
  props: ['gdoc']
}
</script>

<style lang="scss">
@import '~assets/styles/resources';

.google-doc {
  max-width: 36rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #f0f0f0;
  border-radius: 1rem;
  box-shadow: 0 8px 48px 0 rgba(black, .25);
  overflow-x: hidden; // FIXME: temporary fix to prevent horizontal scrolling

  .gdoc-image-container {
    overflow-x: scroll;
  }

  > #banners,
  > #header,
  > #footer { // FIXME: temp hack
    display: none;
  }
  > .content {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.5;

    .divider {
      width: 0.5rem;
      height: 0.5rem;
      background-color: black;
      margin: 1rem auto;
    }
  }
}
</style>
