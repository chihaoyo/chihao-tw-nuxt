<template>
<div class="page hongkong-823">
  <div class="container" ref="container">
    <div class="scroll">
      <div class="image" v-for="(image, imageIndex) of images" :key="imageIndex">
        <img :src="image.reference" />
        <a class="source a-block font-size-tiny"><span class="a-target">{{ image.photographer }}{{ image.photographer && image.publisher ? PUNCT.SLASH : '' }}{{ image.publisher }}</span></a>
      </div>
    </div>
  </div>
  <header>
    <img :src="logo" height="64" />
  </header>
  <footer>
  </footer>
</div>
</template>

<script>
import * as util from 'assets/scripts/util'
import logo from '~/assets/images/hongkong-823-logo.png'
import coverImage from '~/assets/images/hongkong-823-cover.png'
import images from '~/data/2019-08-23-hk.json'

const textMap = {
  title: '【香港反送中】823 香港之路',
  description: '香港反送中運動將進入第 12 個週末，市民發起「香港之路」牽手守護香港運動，8/23 晚間在全港各地，遍地開花、串連。'
}

export default {
  data() {
    return {
      PUNCT: util.PUNCT,
      logo,
      coverImage,
      images
    }
  },
  head() {
    const pageTitle = textMap.title
    const pageDescription = textMap.description
    return {
      title: pageTitle,
      meta: util.generateMeta(pageTitle, pageDescription, coverImage)
    }
  },
  mounted() {
    let $container = this.$refs.container
    console.log($container)
  }
}
</script>

<style lang="scss">
@import '~assets/styles/resources';

.page.hongkong-823 {
  $height: 100vh;
  > .container {
    width: 100%;
    height: $height;
    > .scroll {
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      display: flex;
      > .image {
        position: relative;
        > img {
          display: block;
          height: $height;
        }
        > .source {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.25rem 0.5rem;
          background-color: black;
          color: white;
        }
      }
    }
  }
  > header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    @include shadow;
    > h1 {
      padding: 0.5rem 0.75rem;
      background-color: black;
      color: white;
    }
  }
  > footer {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}

</style>
