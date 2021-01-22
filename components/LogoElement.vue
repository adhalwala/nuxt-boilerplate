<template>
  <img
    src="/cause-logo.svg"
    class="logoelement"
    :width="width"
    :height="height"
    :alt="alt"
  />
</template>

<style lang="scss" scoped>
.logoelement {
  border-radius: 100%;
  padding: 15px;
  box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
  &:hover {
    background-color: #f3f3f4;
  }
  &:focus,
  &:active {
    background-color: #e6e7ea;
  }
}
</style>

<script>
export default {
  name: 'LogoElement',

  props: {
    width: {
      default: '',
      type: String,
    },
    height: {
      default: '',
      type: String,
    },
    alt: {
      default: '',
      type: String,
    },
  },
}
</script>
