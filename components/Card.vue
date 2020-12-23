<template>
  <div class="cta--wrapper">
    <v-row>
      <v-col cols="6" sm="6" md="3" lg="3" xl="3">
        <div class="cta--block">
          <div class="cta-img-wrapper">
            <div class="top-img text-center">
              <img class="" :src="topimg" />
            </div>
            <img :src="imgsrc" />
            <span>{{ title }}</span>
          </div>
          <div class="cta--action d-none d-sm-flex">
            <v-icon left class="cta-link-icon"> {{ icon }} </v-icon>
            <span class="d-flex">{{ description }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.cta--wrapper {
  @media screen and (min-width: 600px) {
    .cta--block {
      border-bottom: 1px solid #3c76a6;
      height: 100%;
    }
  }
  .cta-img-wrapper {
    position: relative;
    > img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
      height: 300px;
    }
    span {
      color: #ffffff;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 27px;
      position: absolute;
      z-index: 9;
      left: 15px;
      bottom: 15px;
      @media screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .top-img {
      height: 60px;
      width: 60px;
      border-radius: 36px;
      background-color: #ffffff;
      padding: 5px;
      overflow: hidden;
      position: absolute;
      right: 15px;
      top: 15px;
      display: flex;
      img {
        text-align: center;
        width: 40px;
        justify-content: center;
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .cta--action {
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    i {
      color: #3c76a6;
      border: 1px solid #3c76a6;
      font-size: 16px;
      padding: 5px;
      border-radius: 100%;
      width: 30px;
      height: 30px;
      line-height: 30px;
      position: absolute;
      left: 10px;
      top: 0;
    }
    span {
      color: #3c76a6;
      font-family: Roboto;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.3px;
      line-height: 26px;
      padding-left: 42px;
      padding-top: 2px;
      min-height: 40px;
      padding-bottom: 10px;
    }
    &:hover {
      i {
        background-color: #3c76a6;
        color: #ffffff;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'Card',
  props: {
    topimg: String,
    title: String,
    imgsrc: String,
    icon: String,
    description: String,
  },
}
</script>
