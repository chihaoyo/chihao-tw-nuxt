<template>
<div class="page project">
  <google-doc :gdoc="gdoc" />
</div>
</template>

<script>
import projects from '~/data/projects'
import { getDoc } from '~/lib/gdoc'
import { generateMeta } from '~/assets/scripts/util'
import GoogleDoc from '~/components/GoogleDoc'

export default {
  async asyncData({ params, error }) {
    const project = projects[params.id]
    if(!project) {
      error({ statusCode: 404, message: 'Project not found' })
      return
    }
    const gdoc = await getDoc(project.doc)
    return {
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
