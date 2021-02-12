<template>
  <div class="">
    <div class="home-page charity-page">
      <v-container>
        <v-row>
          <div class="d-flex col-12 pt-3 pt-sm-2 align-center">
            <div class="col-6 pt-0 pt-sm-2">
              <logo class="" :width="width" />
            </div>
            <site-menu class="col-6 pt-0 pt-sm-2" />
          </div>
          <div class="d-flex width-full">
            <banner
              class="col-12 col-sm-5 left-side-home mt-4 mt-sm-0"
              :bannertitle="charitytitle.name"
              icon="mdi mdi-heart"
              label="Register interest"
            />
            <banner-image class="col-7 d-flex" />
          </div>
        </v-row>
      </v-container>
    </div>
    <information-strip class="col-12 pt-0 pb-0" />
    <howit-works class="mt-10 howitworks-wrapper" />
    <div
      class="primary-dark-bg charity-wrapper pt-15 pb-15 counter-main-wrapper"
    >
      <v-container>
        <v-row>
          <h2 class="bold text-primary-color text-center width-full mt-2">
            Cause is an almost effortless fundraising model.
          </h2>
          <p class="text-center medium-font d-block width-full">
            Share the link to your Cause page with your supporter.<br />
            Automatically start generating donations for your non-profit.
          </p>
        </v-row>
      </v-container>
    </div>
    <div class="d-block width-full shop-now-section pt-15 pb-15">
      <h2 class="ml-auto mr-auto d-block text-center width-full">
        Featured Causes
      </h2>
      <v-container class="mt-10">
        <v-col class="col-12">
          <v-row>
            <v-row>
              <shop-block
                v-for="(item, i) in 4"
                :key="i"
                bgimg="https://picsum.photos/500/300?image=35"
                img="/cause-logo.svg"
                title="The Tree Project"
                description="Tree Project is a non-profitable (Charitable), non-government,"
                shopbutton="Learn more"
                :isLightbtn="true"
                class="col-sm-4 col-md-3 pl-5 pr-5 mb-4"
              />
              <shop-block
                v-for="(item, i) in 4"
                :key="i"
                img="/cause-logo.svg"
                title="The Good Guys"
                description="Up to 3.5% donated"
                shopbutton="Learn more"
                :isLightbtn="true"
                class="col-sm-4 col-md-3 pl-5 pr-5 mb-4"
              />
            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </div>
    <div class="d-block width-full bg-primary shop-now-section pt-15 pb-15">
      <h2 class="ml-auto mr-auto d-block text-center width-full">
        Our Partners
      </h2>
      <v-container class="mt-10">
        <v-col class="col-12">
          <v-row>
            <v-row>
              <shop-block
                v-for="(item, i) in 8"
                :key="i"
                img="/cause-logo.svg"
                title="The Good Guys"
                description="Up to 3.5% donated"
                shopbutton="Shop Now"
                :isLightbtn="true"
                class="col-sm-4 col-md-3 pl-5 pr-5 mb-4"
              />
              <button class="learn-more-btn ml-auto mr-auto mt-4">
                Load More <v-icon>mdi-chevron-down</v-icon>
              </button>
            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </div>
    <div class="width-full pt-15 mt-7 pb-2 getting-started our-value-block">
      <v-container>
        <v-row>
          <h3 class="heading-3 mb-10 width-full text-center">
            Getting Started
          </h3>
          <v-col class="col-12 col-sm-4 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/co-operation.svg" />
            </div>
            <h2 class="mt-5">Claim your Cause page</h2>
          </v-col>
          <v-col class="col-12 col-sm-4 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/kindness.svg" />
            </div>
            <h2 class="mt-5">Complete your account profile</h2>
          </v-col>
          <v-col class="col-12 col-sm-4 text-center">
            <div class="img-value-wrapper align-self-center d-flex">
              <img class="ml-auto mr-auto" src="/rebellion.svg" />
            </div>
            <h2 class="mt-5">Promote your Cause page</h2>
          </v-col>
        </v-row>
        <my-button
          class="mt-15"
          label="Register interest"
          icon="mdi mdi-heart"
        />
      </v-container>
    </div>

    <footers class="mt-15" />
  </div>
</template>
<style lang="scss" scoped>
.home-page,
.bg-primary {
  background-color: #f3f9ff;
}
.charity-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
}
.counter-main-wrapper {
  padding-top: 100px;
}

.counter-bottom-line {
  color: #a5d6fe;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 20px;
  justify-content: center;
}
.free-text-lable {
  color: #3c76a6;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 45px;
  text-align: center;
  span {
    color: #0c1831;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}
.c-blog {
  max-width: 1390px;
  margin: auto;
}

@media screen and (min-width: 1900px) {
  .howitworks-wrapper {
    max-width: 1400px;
    margin: auto;
  }
}
@media screen and (max-width: 1200px) and (min-width: 960px) {
  .show-case-right-left .logos-showcase-images {
    left: -170px;
  }
}
@media screen and (max-width: 600px) {
  .charity-wrapper {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .banner-slider {
    position: absolute;
    right: 0;
    top: 70px;
  }
  .site-logo {
    width: 90px;
  }
  .counter-main-wrapper {
    padding-top: 20px;
  }

  .counter-bottom-line {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 21px;
    padding-top: 35px;
    max-width: 400px;
    margin: auto;
  }
  .footer-wrapper {
    margin-top: 0px !important;
  }
}
</style>
<style>
.show-case-right-left .logo-showcase-text {
  margin-left: auto;
}
.show-case-right-left .top-logo-wrapper {
  right: 130px;
}
@media screen and (min-width: 1900px) {
  .show-case-right-left .top-logo-wrapper {
    right: 0px;
  }
}
@media screen and (min-width: 600px) {
  .show-case-right-left .logo-showcase-text {
    padding-right: 40px;
  }
}
@media screen and (max-width: 959px) and (min-width: 600px) {
  .logos-showcase-images {
    right: auto !important;
    left: -45px;
  }
  .show-case-right-left .logos-showcase-images {
    left: -45px;
  }
  .logos-showcase {
    padding-right: 10px;
  }
  .logos-showcase-images {
    transform: scale(0.8) !important;
    min-height: 400px !important;
  }

  .show-case-right-left .logo-showcase-text {
    padding-right: 0px;
  }
  .logos-showcase-images .top-logo-wrapper {
    /* right: 0px; */
    top: -100px !important;
  }
}
@media screen and (max-width: 800px) and (min-width: 600px) {
  .show-case-right-left .logos-showcase-images {
    left: -110px;
  }
}
@media screen and (max-width: 600px) {
  .banner-wrapper {
    min-height: 400px;
  }
  .c-blog {
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 0px !important;
  }
}
@media screen and (max-width: 500px) {
  .c-blog {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 0px !important;
  }
  .cta--wrapper {
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 0px;
    padding-top: 14px;
  }
}
@media screen and (max-width: 599px) {
  .left-side-home .banner-btn,
  .left-side-home .c-primary-btn,
  .left-side-home .c-primary-btn button,
  .c-blog .c-primary-btn button {
    width: 100%;
  }
  .c-blog .c-primary-btn {
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 60px;
  }
  .left-side-home .c-primary-btn {
    margin-top: 20px;
  }
}
@media screen and (max-width: 1224px) and (min-width: 960px) {
  .banner-slider .heart-slider.v-carousel {
    width: 426px !important;
    height: 380px !important;
  }
  .banner-slider .sliderlogo {
    height: 92px !important;
    width: 92px !important;
  }
  .banner-slider .heart-slider.v-carousel:after {
    height: 100.3%;
    background-size: 100% 382px;

    /* background-size: 100%; */
  }
  .c-blog .row {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
<script>
import Logo from '~/components/Logo.vue'
import SiteMenu from '~/components/SiteMenu.vue'
import MyButton from '~/components/Button.vue'
import Banner from '~/components/Banner.vue'
import InformationStrip from '~/components/InformationStrip.vue'
import ShopBlock from '~/components/ShopBlock.vue'
import HowitWorks from '~/components/HowitWorks.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'ForCharityPage',

  components: {
    Logo,
    SiteMenu,
    MyButton,
    Banner,
    InformationStrip,
    ShopBlock,
    HowitWorks,
    Footers,
  },

  props: {
    width: {
      type: String,
      default: '118',
    },
  },
  data() {
    return {
      charitytitle: [
        {
          name: 'Get Donations. Free.',
        },
        {
          name: 'Chicken',
        },
        {
          name: 'Fix a Well',
        },
        {
          name: 'Build a School',
        },
      ],
    }
  },
}
</script>
