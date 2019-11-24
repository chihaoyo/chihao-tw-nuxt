<template>
<div class="page index">
  <nav>
    <img class="icon" src="/chihao.tw-favicon.png" />
    <h1 class="title">chihao.tw</h1>
  </nav>
  <div class="gdoc" v-html="gdoc"></div>
</div>
</template>

<script>
import { getDoc } from '~/lib/gdoc'
import { generateMeta } from '~/assets/scripts/util'

const gDocPublicURL = 'https://docs.google.com/document/d/e/2PACX-1vSiKEisXtYMEjXnT95sUX9DsI0ixA4vea6EHDKeFJpg9gL7V6YzuSybmhmdRarqMNsr07_UznSgWf01/pub'

export default {
  async asyncData() {
    let gdoc = await getDoc(gDocPublicURL)
    return {
      gDocPublicURL,
      gdoc
    }
  },
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
}
</style>
