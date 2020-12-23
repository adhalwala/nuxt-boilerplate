<template>
  <p class="d-flex footer-copyright text-center">{{ text }}</p>
</template>
<style lang="scss" scoped>
.footer-copyright {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 34px;
  justify-content: center;
}
</style>
<script>
export default {
  name: 'FooterCopyright',
  props: {
    text: String,
  },
}
</script>
