<template>
<div class="nav">
  <img class="icon" src="/chihao.tw-favicon.png" />
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
  > .icon {
    display: block;
    height: $nav-height;
  }
}
</style>
