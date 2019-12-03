<template>
<main>
  <nav-bar />
  <nuxt />
</main>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import '~assets/styles/common';

main {
  position: relative;
}

</style>
