<template>
  <v-main class="logos-showcase testimonials">
    <v-carousel
      height="auto"
      :show-arrows="false"
      hide-delimiters
      v-model="model"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-col class="col-12 text-center">
          <div class="align-self-center">
            <div class="--wrapper tex-center d-inline-block">
              <img :src="item.src" />
            </div>
            <i class="tex-center d-inline-block col-12">{{ name[i] }}</i>
            <h3>{{ description[i] }}</h3>
          </div>
        </v-col>
      </v-carousel-item>
    </v-carousel>
    <v-col class="col-12 text-center testimonial-number mt-15">
      <i
        class="mr-3 mdi mdi-chevron-left testimonial-arrow"
        @click="model--"
      ></i>
      <span class="bold black-color">{{ model + 1 }} / </span>{{ items.length }}
      <i
        class="ml-3 mdi mdi-chevron-right testimonial-arrow"
        @click="model++"
      ></i>
    </v-col>
  </v-main>
</template>
<style lang="scss" scoped>
.logos-showcase {
  padding-top: 100px !important;
  padding-bottom: 100px !important;
  h3,
  p {
    color: #0c1831;
  }
  p {
    // width: 425px;
  }
}
.testimonials {
  h3 {
    font-family: Roboto;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 38px;
    margin-top: 18px;
  }
  i {
    color: #3b495b;
    font-family: Roboto;
    font-size: 20px;
    font-style: italic;
    letter-spacing: 0;
    line-height: 26px;
    text-align: center;
    margin-top: 23px;
  }
  .--wrapper {
    box-sizing: border-box;
    height: 166px;
    width: 166px;
    border: 8px solid #f3f9ff;
    border-radius: 100px;
    background-color: #f7f8f8;
    overflow: hidden;
    img {
      height: 150px;
      width: 150px;
    }
  }
  .testimonial-arrow {
    align-items: center;
    display: inline-flex;
    font-feature-settings: 'liga';
    font-size: 26px;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    margin-top: 0px;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      color: #0c1831;
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    .--wrapper {
      height: 105px;
      width: 105px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    i {
      font-size: 16px;
    }
    h3 {
      font-size: 20px;
    }
    padding-top: 50px !important;
    padding-bottom: 20px !important;
  }
}
.testimonial-number {
  color: #0c1831;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 21px;
}
</style>
<script>
export default {
  name: 'Testimonials',

  data() {
    return {
      items: [
        {
          src: '/cause-logo.svg',
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
      name: ['Josey R, Elwood, VIC', 'Second', 'Third', 'Fourth', 'Fifth'],
      description: [
        'It’s basically free donations',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      model: 0,
    }
  },
}
</script>
