<template>
  <h3 class="c-heading black--text">{{ text }}</h3>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 26px;
  font-weight: bold;
}
</style>
<script>
export default {
  name: 'HeadingH3',
  props: {
    text: {
      type: String,
      default: 'Heading H3',
    },
  },
}
</script>
