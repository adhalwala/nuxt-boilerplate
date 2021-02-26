<template>
  <v-col>
    <div class="innerpage_banner">
      <img class="width-full d-block" :src="bgimg" :alt="alt" />
      <div class="innerpage_topimage text-center d-flex" v-if="topimg">
        <img :src="topimg" class="align-self-center ml-auto mr-auto" />
      </div>
    </div>
  </v-col>
</template>

<style lang="scss" scoped>
.innerpage_banner {
  position: relative;
  width: 100%;
  &:after {
    background: #0c1831;
    opacity: 0.3;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .innerpage_topimage {
    height: 268px;
    width: 268px;
    border-radius: 134px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    img {
      height: 166px;
      width: 166px;
    }
  }
  @media screen and (min-width: 1920px) {
    .innerpage_topimage {
      left: 30%;
      right: auto;
    }
  }
}
</style>
<script>
export default {
  name: 'InnerBannerImage',
  props: {
    topimg: {
      default: '',
      type: String,
    },
    bgimg: {
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
