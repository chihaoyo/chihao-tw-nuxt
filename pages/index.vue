<template>
<div class="page index">
  <nav>
    <img class="icon" src="/chihao.tw-favicon.png" />
    <h1 class="title">chihao.tw</h1>
  </nav>
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vSiKEisXtYMEjXnT95sUX9DsI0ixA4vea6EHDKeFJpg9gL7V6YzuSybmhmdRarqMNsr07_UznSgWf01/pub"></iframe>
</div>
</template>

<script>
import { generateMeta } from 'assets/scripts/util'

export default {
  head() {
    const pageTitle = 'chihao.tw'
    const pageDescription = 'chihao.tw'
    return {
      title: pageTitle,
      meta: generateMeta(pageTitle, pageDescription)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/resources';

.page.index {
  $nav-height: 46px;
  > nav {
    display: flex;
    align-items: center;
    > .icon {
      height: $nav-height;
    }
    > .title {
      font-size: $font-size-small;
      line-height: $line-height-single;
      margin: 0 0.5rem;
      padding: 0;
    }
  }
  > iframe {
    width: 100%;
    height: calc(100vh - #{$nav-height});
    margin: 0;
    border: 0;
    padding: 0;
  }
}
</style>
