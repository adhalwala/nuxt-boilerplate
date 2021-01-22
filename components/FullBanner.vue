<template>
  <div class="d-flex width-full bg-primary">
    <banner
      class="col-12 col-sm-6 left-side-home mt-4 mt-sm-0"
      bannertitle="Plant a tree"
      bannersubtitle="when you shop online"
      icon="mdi mdi-heart"
      label="Add The Button to Chrome"
    />
    <banner-image class="col-6 d-flex" />
  </div>
</template>
<script>
import Banner from '~/components/Banner.vue'

export default {
  name: 'FullBanner',
  components: {
    Banner,
  },
}
</script>
