<template>
  <div class="">
    <div class="home-page">
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
              bannertitle="Plant a tree"
              bannersubtitle="when you shop online"
              icon="mdi mdi-heart"
              label="Email me when it’s ready"
            />
            <banner-image class="col-7 d-flex" />
          </div>
        </v-row>
      </v-container>
    </div>
    <div class="primary-dark-bg pre-launch counter-main-wrapper pt-7 pb-10">
      <v-container>
        <v-row>
          <v-col class="col-12">
            <img
              src="/rocket.svg"
              class="rocket-img mb-4 d-flex ml-auto mr-auto"
            />
            <h2 class="mb-10 justify-center d-flex ml-auto mr-auto">
              Be the first one to know when the Cause Button launches!
            </h2>
            <my-button icon="mdi mdi-heart" label="Email me when it’s ready" />
            <ul class="d-flex justify-center mt-10">
              <li>
                <h6>0</h6>
                <span> Days </span>
              </li>
              <li>
                <h6>0</h6>
                <span> Hours </span>
              </li>
              <li>
                <h6>0</h6>
                <span> Minutes </span>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <howit-works class="mt-10 howitworks-wrapper" />
    <div class="bg-primary mb-sm-0 mb-15">
      <v-container>
        <v-row>
          <heading-copy-block
            title="Hundreds of stores"
            text="We’ve partnered with the brands you love. And more are joining all the time."
            label="Explore stores"
            isButton
          />
          <v-col class="d-flex col text-center">
            <logos-showcase />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="primary-dark-bg charity-wrapper">
      <v-container>
        <v-row style="/*flex-wrap: nowrap*/">
          <couse-card
            imgsrc="/charity-icon.svg"
            title="100% for Charity"
            description="We do not charge charities anything. They receive 100% of the donation amounts shown."
          />
          <couse-card
            imgsrc="/purpose-icon.svg"
            title="100%  for Purpose"
            description="We are a social enterprise. Our store partners pay us fees to cover our operating expenses."
          />
          <couse-card
            imgsrc="/privacy-icon.svg"
            title="100%  for Privacy"
            description="We do not share or sell any of your personal information. Ever."
          />
        </v-row>
      </v-container>
    </div>
    <div class="bg-primary show-case-right-left">
      <v-container>
        <v-row class="flex-sm-row-reverse">
          <heading-copy-block
            class=""
            title="Thousands of charities"
            text="There are over 57,000 charities on Cause. All registered and
          independently verified."
            isButton
            label="Explore stores"
          />
          <v-col class="d-flex text-center">
            <logos-showcase />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="">
      <testimonials
        name="Josey R, Elwood, VIC"
        imgsrc="/cause-logo.svg"
        description="It’s basically free donations"
      />
    </div>
    <div class="primary-dark-bg counter-main-wrapper">
      <v-container>
        <v-row no-gutters>
          <counter
            class="col-4"
            number="$44.72"
            description="Average donation per purchase"
          />
          <counter
            class="col-4"
            number="57,000+"
            description="Charities on Cause"
          />
          <counter
            class="col-4"
            number="200+"
            description="Participating stores"
          />
        </v-row>
        <span class="counter-bottom-line"
          >Average Donation Opportunity based on 20 leading store partners
          Average Order Value as at Q4 2020.
        </span>
      </v-container>
    </div>
    <div class="pt-3 pb-3 pb-sm-15 pt-sm-15 mb-0 c-blog">
      <h3 class="text-center free-text-lable">
        <span
          >Be the first one to know when<br />the Cause Button launches!.</span
        >
      </h3>
      <div class="mt-sm-15 mt-3">
        <v-row>
          <c-card
            topimg="/cause-logo.svg"
            title="Provide clean water"
            imgsrc="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            icon="mdi mdi-heart"
            description="Give access"
          />
          <c-card
            topimg="/cause-logo.svg"
            title="Provide clean water"
            imgsrc="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            icon="mdi mdi-heart"
            description="Give access to family consultation"
          />
          <c-card
            topimg="/cause-logo.svg"
            title="Provide clean water"
            imgsrc="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            icon="mdi mdi-heart"
            description="Give access to family consultation"
          />
          <c-card
            topimg="/cause-logo.svg"
            title="Provide clean water"
            imgsrc="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            icon="mdi-heart"
            description="Give access to family consultation"
          />
        </v-row>
        <my-button
          class="mt-8 mt-sm-16"
          label="Email me when it’s ready"
          icon="mdi mdi-heart"
        />
      </div>
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
import Banner from '~/components/Banner.vue'
import HowitWorks from '~/components/HowitWorks.vue'
import HeadingCopyBlock from '~/components/HeadingCopyBlock.vue'
import LogosShowcase from '~/components/LogosShowcase.vue'
import CouseCard from '~/components/CauseCard.vue'
import Testimonials from '~/components/Testimonials.vue'
import Counter from '~/components/Counter.vue'
import CCard from '~/components/Card.vue'
import MyButton from '~/components/Button.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'HomeLaunchPage',

  components: {
    Logo,
    SiteMenu,
    Banner,
    HowitWorks,
    HeadingCopyBlock,
    LogosShowcase,
    CouseCard,
    Testimonials,
    Counter,
    CCard,
    MyButton,
    Footers,
  },

  props: {
    width: {
      type: String,
      default: '118',
    },
  },
}
</script>
