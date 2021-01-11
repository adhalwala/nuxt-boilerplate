<template>
  <div class="banner-slider">
    <div style="width: auto; position: relative">
      <!-- <div class="heart-border"></div> -->
      <v-carousel
        class="heart-slider"
        hide-delimiters
        cycle
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <img class="slider-top-img" src="/cause-logo.svg" />
    </div>
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
          strokeWidth="2"
          class="cls-1"
          d="M1,0.307 C0.993,0.427,0.943,0.504,0.91,0.555 C0.784,0.739,0.5,1,0.5,1 S0.217,0.739,0.09,0.555 C0.057,0.504,0.007,0.427,0,0.307 C0,0.137,0.128,0,0.285,0 C0.371,0,0.448,0.041,0.5,0.105 C0.552,0.041,0.629,0,0.714,0 C0.872,0,1,0.138,1,0.307"
        />
      </clipPath>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.banner-slider {
  position: relative;
  .slider-top-img {
    height: 125px;
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
    -webkit-clip-path: url(#mask);
    clip-path: url(#mask);
    height: 200px;
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    .heart-slider {
      width: 250px;
      height: 250px !important;
      right: -45px;
    }
    .slider-top-img {
      width: 70px;
      height: 70px;
      top: auto;
      right: auto;
      bottom: 50px;
      left: 80px;
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
    }
  },
}
</script>
