<template>
  <div class="">
    <h2 class="HowItWorks d-md-none d-block pl-5 pr-5 text-center">
      How it Works ?
    </h2>
    <div class="gridContainer d-md-flex d-inline-block align-self-center">
      <div
        class="containerOneChildOne col-12 col-md-7 text-left align-self-center pr-sm-15 pr-0 pl-0"
      >
        <div class="imgContainer">
          <video
            autoplay
            loop=""
            class="d-block"
            id="myvid"
            width="100%"
            preload="auto"
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
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 600px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.containerOneChildOne {
  // text-align: center;
  // place-items: center;
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
  > div {
    cursor: pointer;
  }
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
  p {
    color: #0c1831;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 28px;
    margin: 0px;
  }
  > div {
    border: 0px;
    padding-bottom: 25px;
    position: relative;
    padding-left: 40px;
    padding-top: 15px;

    &.active,
    &:hover {
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
</style>
<script>
export default {
  name: 'HowitWorks',
  data() {
    return {
      active_el: 1,
    }
  },
  props: {
    title: String,
    description: String,
  },

  // computed: {
  //   active_el() {
  //     const vid = document.getElementById('myvid')
  //     if (vid) {
  //       vid.ontimeupdate = function () {
  //         if (vid.currentTime > 0 && vid.currentTime < 4) {
  //           // console.log('sehjad')
  //           return 1
  //         } else if (vid.currentTime > 4 && vid.currentTime < 11) {
  //           // console.log('ssss')
  //           return 2
  //         } else {
  //           // console.log('sajju')
  //           return 3
  //         }
  //       }
  //     }
  //     return 0
  //   },
  // },
  methods: {
    skip(value, el) {
      const video = document.getElementById('myvid')
      video.currentTime = value
      this.active_el = el
    },
  },
}
</script>
