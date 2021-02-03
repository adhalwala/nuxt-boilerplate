<template>
  <div class="">
    <h2 class="HowItWorks d-md-none d-block pl-5 pr-5 text-left text-sm-center">
      How it Works ?
    </h2>
    <div class="gridContainer d-md-flex d-inline-block align-self-center">
      <div
        class="containerOneChildOne col-12 col-md-7 text-left align-self-center pl-0"
      >
        <div
          class="imgContainer"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="30"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <video
            id="myvid"
            ref="vidBlock"
            autoplay
            loop=""
            class="d-block"
            width="100%"
            preload="auto"
            @timeupdate="onTimeUpdateListener"
          >
            <source src="/Cause-How-it-works-v-2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        class="containerOneChildTwo col-12 col-md-5 text-left align-self-center"
      >
        <h2 class="HowItWorks d-md-block d-none">How it Works ?</h2>

        <div class="liwrapper">
          <div
            id="imageONE"
            :class="{ active: active_el === 1 }"
            @click="skip(0, 1)"
          >
            <h6>Add in seconds</h6>
            <p>Just two clicks to install. It’s 100% free.</p>
          </div>
          <div
            id="imageTWO"
            :class="{ active: active_el === 2 }"
            @click="skip(4, 2)"
          >
            <h6>Shop like normal</h6>
            <p>
              The Cause Button will appear when you visit a store offering free
              donations.
            </p>
          </div>
          <div
            id="imageTHREE"
            :class="{ active: active_el === 3 }"
            @click="skip(11, 3)"
          >
            <h6>Raise money for charity</h6>
            <p>Just two clicks to install. It’s 100% free.</p>
          </div>
        </div>
        <div class="col-12 text-center how-it-work-mobile mt-6 col pl-0 pr-0">
          <i
            class="mdi mdi-chevron-left"
            @click="next(active_el - 1)"
            :class="{ disabled: active_el === 1 }"
          ></i>
          <span class="bold black-color">{{ active_el }} / </span>3
          <i
            class="mdi mdi-chevron-right"
            @click="next(active_el + 1)"
            :class="{ disabled: active_el === 3 }"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.HowItWorks {
  text-align: left;
  margin-top: 20px;
  color: #0c1831;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 45px;
  margin-bottom: 42px;
  @media screen and (max-width: 600px) {
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.31px;
    line-height: 30px;
    text-align: left;
    margin-bottom: 10px;
  }
}

.gridContainer {
  // margin: 10px 30px;
  // display: grid;
  // grid-template-columns: 45% 55%;
  // min-height: 600px;
  padding-top: 80px;
  padding-bottom: 100px;
  @media screen and (max-width: 1200px) and (min-width: 960px) {
    padding-top: 0px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 601px) {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 10px;
  }
}

.containerOneChildOne {
  @media screen and (min-width: 601px) {
    padding-right: 100px;
  }
}

.containerOneChildOne img {
  max-width: 100%;
  // padding: 30px;
}

.liwrapper {
  // margin-top: 30px;
  // margin-left: 20px;
  // border-left: 2px solid #bdbdbd;
  border-left: 1px solid #151515;

  h2 {
  }
  h6 {
    color: #3c76a6;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    margin-bottom: 3px;
  }
  > div {
    cursor: pointer;
    &:hover {
      h6 {
        color: #2e5a7d;
      }
    }
  }
  p {
    color: #0c1831;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 28px;
    margin: 0px;
    max-width: 335px;
  }
  > div {
    border: 0px;
    padding-bottom: 25px;
    position: relative;
    padding-left: 40px;
    padding-top: 15px;

    &.active {
      &:after {
        content: '';
        position: absolute;
        left: -2px;
        top: 0;
        width: 3px;
        height: 100%;
        z-index: 99;
        background: #3c76a6;
        border-radius: 100px;
      }
    }
    &:hover {
    }
  }
  @media screen and (max-width: 600px) {
    border-left: 0;
    border-bottom: 1px solid #151515;
    h6 {
      font-size: 16px;

      font-weight: bold;
    }
    p {
      line-height: 24px;
    }
    > div {
      padding-left: 0px;
      min-height: 120px;
      &:not(.active) {
        display: none;
      }
      &.active,
      &:hover {
        &:after {
          content: '';
          position: absolute;
          left: auto;
          bottom: -2px;
          top: auto;
          width: 33.33%;
          height: 3px;
          z-index: 999;
          z-index: 99;
          background: #3c76a6;
          border-radius: 100px;
        }
      }
      &:nth-child(2) {
        &:after {
          left: 33.33%;
        }
      }
      &:nth-child(3) {
        &:after {
          left: 66.66%;
        }
      }
    }
  }
}

// .liBgActive:before {
//   background-color: coral !important;
// }

.imgContainer {
  transition: all 1s ease;
  height: 100%;
  box-shadow: 0px 0px 50px 11px #ddd;
}

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
    strong {
      font-weight: bold;
    }
  }
}
.how-it-work-mobile {
  .mdi-chevron-left {
    float: left;
    align-items: center;
    display: inline-flex;
    font-size: 26px;
    line-height: 22px;
    left: -10px;
    position: relative;
  }
  .mdi-chevron-right {
    float: right;
    align-items: center;
    display: inline-flex;
    font-size: 26px;
    line-height: 22px;
    right: -10px;
    position: relative;
  }
  i {
    opacity: 0.5;
    color: #0c1831;
    &:hover {
      opacity: 1;
    }
    &.disabled {
      opacity: 0.2;
    }
  }
  span {
    font-weight: bold;
  }
  @media screen and (min-width: 601px) {
    display: none;
  }
}
</style>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'HowitWorks',
  created() {
    AOS.init()
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active_el: 1,
      videoTime: 0,
    }
  },
  methods: {
    skip(value, el) {
      const video = this.$refs.vidBlock
      video.currentTime = value
      this.active_el = el
    },
    next(value) {
      const video = this.$refs.vidBlock
      this.active_el = value
      if (this.active_el === 1) {
        video.currentTime = 0
      } else if (this.active_el === 2) {
        video.currentTime = 4
      } else {
        video.currentTime = 11
      }
    },
    onTimeUpdateListener(element) {
      this.videoTime = element.srcElement.currentTime
      if (this.videoTime > 0 && this.videoTime < 4) {
        this.active_el = 1
      } else if (this.videoTime > 4 && this.videoTime < 11) {
        this.active_el = 2
      } else {
        this.active_el = 3
      }
    },
  },
}
</script>
