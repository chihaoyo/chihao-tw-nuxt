<template>
<div class="page index">
  <google-doc :gdoc="gdoc" />
</div>
</template>

<script>
import { getDoc } from '~/lib/gdoc'
import { generateMeta } from '~/assets/scripts/util'
import GoogleDoc from '~/components/GoogleDoc'

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
  },
  components: {
    GoogleDoc
  }
}
</script>

<style lang="scss">
@import '~assets/styles/resources';

.page.index {
  padding: 2rem 0;
  background-color: #aaa;
}
</style>
