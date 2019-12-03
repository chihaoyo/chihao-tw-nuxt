<template>
<nav>
  <img class="icon" src="/chihao.tw-favicon.png" />
  <h1 class="title">chihao.tw</h1>
</nav>
</template>

<style lang="scss">
@import '~assets/styles/resources';

nav {
  display: flex;
  align-items: center;
  background-color: black;
  > .icon {
    height: $nav-height;
  }
  > .title {
    font-size: $font-size-small;
    line-height: $line-height-single;
    margin: 0 0.5rem;
    padding: 0;
    color: white;
  }
}
</style>
