<template>
  <h4 class="c-heading">{{ text }}</h4>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #3c76a6;
}
</style>
<script>
export default {
  name: 'HeadingH4link',
  props: {
    text: {
      type: String,
      default: 'Heading H4 Link',
    },
  },
}
</script>
