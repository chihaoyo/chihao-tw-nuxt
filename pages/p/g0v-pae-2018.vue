<template>
<div class="page project">
  <google-doc :gdoc="gdoc" />
</div>
</template>

<script>
import { getDoc } from '~/lib/gdoc'
import { generateMeta } from '~/assets/scripts/util'
import GoogleDoc from '~/components/GoogleDoc'

const gDocPublicURL = 'https://docs.google.com/document/d/e/2PACX-1vS9NClFM9mWjqPGk6gkdQeI3tM_fPwClipdRg4-LceLzkGZDaHGPutYGmy2qd_DfFR8kMV-aEID9TLX/pub'

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

.page.project {
  padding: $default-page-padding;
}
</style>
