<template>
  <h2 class="c-heading black--text">{{ text }}</h2>
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
    text: {
      type: String,
      default: 'Heading H2',
    },
    width: {
      type: String,
      default: '',
    },
  },
}
</script>
