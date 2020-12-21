<template>
  <div class="d-flex logos-showcase banner-wrapper">
    <v-col class="col-12 text-left">
      <div class="align-self-center">
        <h2>{{ bannertitle }}</h2>
        <h3>{{ bannersubtitle }}</h3>
        <p>
          Add the Cause Button and start raising money for
          <strong>sustainable future </strong>– for free!
        </p>
        <my-button :icon="icon" :label="label" class="text-left float-left" />
      </div>
    </v-col>
  </div>
</template>
<style lang="scss" scoped>
.banner-wrapper {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
  h2 {
    color: #3c76a6;
    font-family: Roboto;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 53px;
  }
  h3 {
    color: #0c1831;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 55px;
  }
  p {
    color: #0c1831;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 33px;
    margin-bottom: 48px;
    margin-top: 40px;
  }
}
</style>
<script>
import MyButton from '~/components/Button.vue'
export default {
  name: 'Banner',
  components: { MyButton },
  props: {
    label: String,
    icon: String,
    bannertitle: String,
    bannersubtitle: String,
  },
}
</script>
