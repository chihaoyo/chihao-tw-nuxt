<template>
<div class="nav">
  <nuxt-link class="link home" :to="{ path: '/' }"><img class="icon" src="/chihao.tw-favicon.png" /></nuxt-link>
</div>
</template>

<style lang="scss">
@import '~assets/styles/resources';

.nav {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  > .link {
    &.home {
      > .icon {
        display: block;
        height: $nav-height;
      }
    }
  }
}
</style>
