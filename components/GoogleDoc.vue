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

  > #banners, > #header, > #footer { display: none; } // FIXME: hack
}
.google-doc > .content {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.5;

  .divider {
    width: 0.5rem;
    height: 0.5rem;
    background-color: black;
    margin: 1rem auto;
  }
  h2 {
    margin: auto;
  }
  ul[class*="lst-kix"] { // FIXME: hack
    > li::before { content: none; }
    &[class*="-0"] { list-style: disc; }
    &[class*="-0"] > li[class*="li-bullet"] { margin-left: 1.5rem; }
    &[class*="-1"] { list-style: circle; }
    &[class*="-1"] > li[class*="li-bullet"] { margin-left: 3.0rem; }
    &[class*="-2"] { list-style: square; }
    &[class*="-2"] > li[class*="li-bullet"] { margin-left: 4.5rem; }
  }
}
</style>
