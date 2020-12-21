<template>
  <!-- <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </button> -->
  <img class="site-logo" :width="style" src="/cause-logo.svg" />
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
      default: '',
    },
  },
}
</script>
