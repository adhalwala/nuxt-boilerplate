<template>
  <v-col class="shop-support-block">
    <div class="shop--block">
      <div class="shop-img-wrapper pt-5 pb-5">
        <div class="shop-img d-flex text-center ml-auto mr-auto">
          <img class="align-self-center ml-auto mr-auto" :src="img" />
        </div>
      </div>
      <div class="shop--action ml-auto mr-auto text-center pt-3 pb-3">
        <span class="shop-title">{{ title }}</span>
        <span class="d-block text-center shop-donate mt-3">{{
          description
        }}</span>
        <v-btn class="shop-now mt-3" center v-ripple> {{ shopbutton }} </v-btn>
      </div>
    </div>
  </v-col>
</template>
<style lang="scss" scoped>
.shop-support-block {
  .shop--block {
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
  }
  .shop-img-wrapper {
    background-color: #f3f9ff;
  }
  .shop-img {
    height: 155px;
    width: 155px;
    border-radius: 77.5px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
    img {
      height: 82.08px;
      width: 89.13px;
    }
  }
  .shop-title {
    color: #0c1831;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.24px;
    line-height: 21px;
    text-align: center;
  }
  .shop-donate {
    color: #0c1831;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 28px;
    text-align: center;
  }
  .shop-now {
    box-sizing: border-box;
    height: 32px;
    width: 132px;
    border: 1px solid #3c76a6;
    border-radius: 16px;
    background-color: #f3f9ff;
    color: #3c76a6;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.24px;
    line-height: 21px;
    text-align: center;
    text-transform: none;
    box-shadow: none;
  }
}
</style>
<script>
export default {
  name: 'ShopBlock',
  props: {
    img: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    description: {
      default: '',
      type: String,
    },
    shopbutton: {
      default: '',
      type: String,
    },
  },
}
</script>
