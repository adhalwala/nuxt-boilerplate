<template>
  <p class="c-heading black--text">{{ text }}</p>
</template>
<style scoped>
.c-heading {
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 100;
}
</style>
<script>
export default {
  name: 'Paragraph',

  props: {
    text: {
      type: String,
      default: 'Paragraph Text',
    },
  },
}
</script>
