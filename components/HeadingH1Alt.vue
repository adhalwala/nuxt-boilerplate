<template>
  <h1 class="c-heading black--text">{{ text }}</h1>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 36px;
  font-weight: 500;
}
</style>
<script>
export default {
  name: 'HeadingH1Alt',

  props: {
    text: {
      type: String,
      required: true,
      default: 'Heading Alt',
    },
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
