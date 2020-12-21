<template>
  <h1 class="c-heading black--text">Heading H1</h1>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 46px;
  font-weight: bold;
}
</style>
<script>
export default {
  name: 'HeadingH1',

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
