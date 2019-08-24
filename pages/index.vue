<template>
<div class="page index">
  <div class="nav font-size-small margin-single line-height-single">chihao.tw</div>
  <iframe src="https://docs.google.com/document/d/e/2PACX-1vSiKEisXtYMEjXnT95sUX9DsI0ixA4vea6EHDKeFJpg9gL7V6YzuSybmhmdRarqMNsr07_UznSgWf01/pub"></iframe>
</div>
</template>

<style lang="scss">
.page.index {
  $nav-height: 46px;
  > iframe {
    width: 100%;
    height: calc(100vh - #{$nav-height});
    margin: 0;
    border: 0;
    padding: 0;
  }
}
</style>
