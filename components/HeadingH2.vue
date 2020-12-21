<template>
  <h2 class="c-heading black--text">Heading H1</h2>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.5px;
}
</style>
<script>
export default {
  name: 'HeadingH2',

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
