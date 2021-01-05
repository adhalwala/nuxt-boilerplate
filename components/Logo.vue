<template>
  <img class="site-logo" :width="width" src="/cause-logo.svg" />
</template>

<script>
import '~/assets/logo.css'

export default {
  name: 'Logo',

  props: {
    altText: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '118',
    },
  },
}
</script>
