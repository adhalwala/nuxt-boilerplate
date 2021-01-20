<template>
  <div class="d-flex logos-showcase banner-wrapper">
    <v-col class="text-left d-flex">
      <div class="align-self-center width-full">
        <h2>{{ bannertitle }}</h2>
        <h3>{{ bannersubtitle }}</h3>
        <p>
          Add the Cause Button and start raising money for
          <strong>sustainable future </strong>– for free!
        </p>
        <my-button
          :icon="icon"
          :label="label"
          class="text-left float-left mb-5 mb-sm-0"
        />
      </div>
    </v-col>
  </div>
</template>
<style lang="scss" scoped>
.banner-wrapper {
  // padding-top: 100px !important;
  // padding-bottom: 100px !important;
  h2 {
    color: #3c76a6;
    font-family: Roboto;
    font-weight: 600;
    font-size: 60px;
    letter-spacing: 0;
    line-height: 53px;
  }
  h3 {
    color: #0c1831;
    font-family: Roboto;
    font-weight: 500;
    font-size: 36px;
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
    strong {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 29px;
      font-family: 'Calibre';
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 29px;
      font-family: Calibre;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.5px;
      line-height: 28px;
      width: 230px;
      margin-top: 30px;
      strong {
        font-weight: normal;
      }
    }
  }
}
</style>
<script>
import MyButton from '~/components/Button.vue'
export default {
  name: 'Banner',
  components: { MyButton },
  props: {
    label: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    bannertitle: {
      default: '',
      type: String,
    },
    bannersubtitle: {
      default: '',
      type: String,
    },
  },
}
</script>
