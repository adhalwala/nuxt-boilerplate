<template>
  <v-col cols="6" sm="6" md="4" lg="3" xl="3" class="cta--wrapper">
    <div class="cta--block" v-ripple>
      <div class="cta-img-wrapper">
        <div class="top-img text-center">
          <img class="" :src="topimg" />
        </div>
        <img :src="imgsrc" />
        <span>{{ title }}</span>
      </div>
      <div class="cta--action">
        <v-icon left class="cta-link-icon"> {{ icon }} </v-icon>
        <span class="d-flex">{{ description }}</span>
      </div>
    </div>
  </v-col>
</template>
<style lang="scss" scoped>
.cta--wrapper {
  @media screen and (min-width: 600px) {
    .cta--block {
      border-bottom: 1px solid #3c76a6;
      height: 100%;
    }
  }
  padding-left: 20px;
  padding-right: 20px;
  .cta-img-wrapper {
    position: relative;
    > img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
      height: 300px;
      display: block;
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
    padding-top: 10px;
    height: 100%;
    i {
      color: #3c76a6;
      border: 1px solid #3c76a6;
      font-size: 16px;
      padding: 5px;
      border-radius: 100%;
      width: 32px;
      height: 32px;
      line-height: 32px;
      position: absolute;
      left: 10px;
      top: 10px;
    }
    span {
      color: #3c76a6;
      font-family: Roboto;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.3px;
      line-height: 28px;
      padding-left: 42px;
      padding-top: 2px;
      min-height: 40px;
      padding-bottom: 10px;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  .cta--block {
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      box-shadow: 0px 0px 10px 5px #dddddd;
      transition: 0.2s;
      i {
        background-color: #3c76a6;
        color: #ffffff;
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-top: 20px;
    .cta-img-wrapper > img {
      height: 210px;
    }
    .cta-img-wrapper .top-img {
      height: 40px;
      width: 40px;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 0px;
    padding-top: 14px;
  }
  @media screen and (max-width: 1224px) and (min-width: 960px) {
    display: inline-block;
    float: none;
  }
}
</style>
<script>
export default {
  name: 'Card',
  props: {
    topimg: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    imgsrc: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    description: {
      default: '',
      type: String,
    },
  },
}
</script>
