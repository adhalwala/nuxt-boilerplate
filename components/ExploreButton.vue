<template>
  <button class="learn-more-btn">
    {{ label }} <v-icon>mdi-chevron-right</v-icon
    ><v-icon>mdi-chevron-double-right</v-icon>
  </button>
</template>
<style lang="scss" scoped>
.learn-more-btn {
  color: #3c76a6;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 24px;
  margin-top: 25px;
}
.learn-more-btn i {
  color: #3c76a6 !important;
}
.learn-more-btn i.mdi-chevron-double-right {
  display: none;
}
.learn-more-btn:hover {
  color: #2d597d;
  transition: 0.3s;
}
.learn-more-btn:hover i.mdi-chevron-right {
  display: none;
}
.learn-more-btn:hover i.mdi-chevron-double-right {
  color: #2d597d !important;
  display: inline-flex;
  margin-left: 2px;
  transition: 0.3s;
}
</style>
<script>
export default {
  name: 'ExploreButton',

  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>
