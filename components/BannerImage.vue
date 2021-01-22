<template>
  <div class="banner-slider mb-13">
    <!-- <div class="heart-border">
      <img src="/heart.svg" />
    </div> -->
    <div
      class="heart-slider-wrapper"
      style="width: auto; position: relative; margin-left: auto"
    >
      <v-carousel
        class="heart-slider"
        hide-delimiters
        cycle
        height="514"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="slide-fade"
          transition="slide-fade"
        >
        </v-carousel-item>
      </v-carousel>

      <!-- <img class="slider-top-img" src="/cause-logo.svg" /> -->
    </div>
    <v-carousel
      class="sliderlogo"
      height="auto"
      hide-delimiters
      cycle
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in itemslogo"
        :key="i"
        :src="item.src"
        reverse-transition="slide-fade"
        transition="slide-fade"
      >
      </v-carousel-item>
    </v-carousel>
    <svg>
      <defs>
        <style>
          .cls-1 {
            fill: #e7f3fb;
            stroke: #e7f3fb;
          }
        </style>
      </defs>
      <clipPath id="mask" clipPathUnits="objectBoundingBox">
        <path
          fill="#000000"
          stroke="red"
          strokeWidth="2px"
          class="cls-1"
          d="M1,0.307 C0.993,0.427,0.943,0.504,0.91,0.555 C0.784,0.739,0.5,1,0.5,1 S0.217,0.739,0.09,0.555 C0.057,0.504,0.007,0.427,0,0.307 C0,0.137,0.128,0,0.285,0 C0.371,0,0.448,0.041,0.5,0.105 C0.552,0.041,0.629,0,0.714,0 C0.872,0,1,0.138,1,0.307"
        />
      </clipPath>
    </svg>
    <!-- <svg
      id="mask"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 580 580"
    >
      <defs>
        <style>
          .cls-1,
          .cls-3 {
            fill: none;
          }

          .cls-2 {
            clip-path: url(#clip-path);
          }

          .cls-3 {
            stroke: #e7f3fb;
            stroke-miterlimit: 10;
            stroke-width: 18px;
          }
        </style>
        <clipPath id="clip-path">
          <path
            class="cls-1"
            d="M566.13,191.1c-4,61.2-31.53,101-49.65,127.21C446.56,412.56,290,546.53,290,546.53s-156.56-134-226.48-228.22c-18.12-26.18-45.69-66-49.65-127.21A157.63,157.63,0,0,1,290,87.16,157.63,157.63,0,0,1,566.13,191.1Z"
          />
        </clipPath>
      </defs>
      <g class="cls-2">
        <image
          width="3992"
          height="2242"
          transform="translate(-227 -0.36) scale(0.26)"
          xlink:href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        />
        <image
          width="100%"
          height="100%"
          transform="translate(-227 -0.36) scale(0.26)"
          xlink:href="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        />
        <image
          width="3992"
          height="2242"
          transform="translate(-227 -0.36) scale(0.26)"
          xlink:href="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        />
      </g>
      <path
        class="cls-3"
        d="M566.13,191.1c-4,61.2-31.53,101-49.65,127.21C446.56,412.56,290,546.53,290,546.53s-156.56-134-226.48-228.22c-18.12-26.18-45.69-66-49.65-127.21A157.63,157.63,0,0,1,290,87.16,157.63,157.63,0,0,1,566.13,191.1Z"
      />
    </svg> -->
  </div>
</template>
<style>
.sliderlogo {
  height: 125px !important;
  width: 125px;
  border-radius: 100px;
  background-color: #ffffff;
  box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
  top: 0px;
  right: 0px;
  position: absolute;
  z-index: 99;
}
.sliderlogo .v-image__image,
.sliderlogo .v-image__image--cover,
.sliderlogo .v-window__container,
.sliderlogo .v-image {
  width: 100%;
  height: 100% !important;
}
.sliderlogo:hover {
  transform: scale(1.2);
  transition: 0.2s;
  -webkit-transition: 0.2s;
}
.sliderlogo:active,
.sliderlogo:focus {
  transform: scale(1);
  transition: 0.2s;
  -webkit-transition: 0.2s;
}
</style>
<style lang="scss" scoped>
.banner-slider {
  position: relative;
  svg {
    position: absolute;
  }
  .sliderlogo {
    height: 125px;
    width: 125px;
    border-radius: 100px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
    top: 0px;
    right: 20px;
    position: absolute;
    .v-image__image,
    .v-image__image--cover,
    .v-window__container {
      width: 100%;
      height: 100% !important;
    }
  }
  .slider-top-img {
    height: 125px !important;
    width: 125px;
    border-radius: 100px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgba(12, 24, 49, 0.2);
    top: 0px;
    right: 0px;
    padding: 10px;
    position: absolute;
  }
  .heart-slider {
    // -webkit-clip-path: url(#mask);
    // clip-path: url(#mask);
    height: 514px !important;
    width: 553px;
    // background-image: url('/heart.png');
    &:after {
      content: '';
      // background-image: url('/heart.png');
      // background-image: url('/heart.svg');
      content: '';
      background-image: url(/heart.png);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 9;
      left: 0;
      top: 0;
      // background-color: #f3f9ff;
      background-size: cover;
    }
    .v-window__container {
      &:after {
        content: '';
        background-image: url('/heart.png');
      }
    }
  }
  .heart-slider-wrapper {
    // margin-right: 15px;
  }
  .heart-border {
    position: absolute;
    top: -35px;
    bottom: 0;
    left: -9px;
    img {
      width: 596px;
      height: 610px;
    }
    @media screen and (min-width: 1900px) {
      right: 6px;
      left: auto;
    }
  }
  @media screen and (max-width: 960px) {
    .heart-slider {
      padding: 3px;
    }
  }
  @media screen and (max-width: 600px) {
    .heart-slider {
      width: 274px;
      height: 254px !important;
      right: 10px;

      &:after {
        // background-size: 100% 100%;
        height: 256px;
      }
    }
    .slider-top-img,
    .sliderlogo {
      width: 70px;
      height: 70px !important;
      top: auto;
      bottom: 25px;
      right: auto;
      left: 40px;
    }
  }
  @media screen and (max-width: 599px) {
    .heart-slider {
      right: -60px;
    }
    .slider-top-img,
    .sliderlogo {
      width: 70px;
      height: 70px !important;
      top: auto;
      left: auto;
      bottom: 25px;
      right: 20px;
    }
  }
}
</style>
<script>
export default {
  name: 'BannerImage',
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      itemslogo: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>
