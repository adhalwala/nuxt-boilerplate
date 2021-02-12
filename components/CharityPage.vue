<template>
  <div class="charity-page">
    <my-header />
    <div class="d-block width-full bg-primary relative">
      <v-container class="charity-page-top">
        <v-row>
          <div class="relative width-full d-block">
            <inner-banner
              class="col-6"
              :isButton="true"
              bannersubtitle="Australian Red Cross"
              maxwidth="387px"
              description="Shop, save and turn your purchases into donations for Australian Red Cross."
              icon="mdi mdi-heart"
              label="Shop & raise donations"
            />
          </div>
        </v-row>
      </v-container>
      <inner-banner-image
        topimg="/cause-logo.svg"
        bgimg="/RedCrossBackground.jpg"
        class="d-flex col-6 ml-auto pa-0"
      />
    </div>
    <inner-information-strip
      infotext="ABN 12 345 678 901"
      weburl="www.redcross.org.au"
      :hasUrl="true"
      :isRate="true"
      class="col-12 pt-0 pb-0"
    />
    <div class="d-block width-full bg-primary about-section pb-15">
      <v-container>
        <v-row>
          <v-col class="col-7 d-flex pl-sm-15">
            <img class="align-self-center pl-sm-15" src="/about-logo.svg" />
          </v-col>
          <v-col class="col-5">
            <h2>About</h2>
            <p>
              We research and measure the digital maturity of
              <strong>over 57,000 Australian charities.</strong> <br /><br />
              We develop a custom digital benchmark report for each charity. Our
              insights and recommendations are based on the actual digital
              footprint of each charity across web, social media and more.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <howit-works class="mt-10 howitworks-wrapper" :isReverseColumn="true" />
    <div class="d-block width-full bg-primary shop-now-section">
      <h2 class="ml-auto mr-auto d-block">Shop now to support this cause</h2>
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
                class="col-3 pl-5 pr-5 mb-4"
              />
              <button class="learn-more-btn ml-auto mr-auto mt-4">
                Load More <v-icon>mdi-chevron-down</v-icon>
              </button>
            </v-row>
          </v-row>
        </v-col>
      </v-container>
    </div>
    <div class="primary-dark-bg charity-wrapper border-bottom">
      <h2 class="text-primary-color width-full text-center mb-4">
        Other ways to support this Cause
      </h2>
      <v-container>
        <v-row style="/*flex-wrap: nowrap*/">
          <couse-card
            imgsrc="/charity-icon.svg"
            title="Spread the word"
            description="Tell your friends about how they can get free donations for this cause."
          />
          <couse-card
            imgsrc="/purpose-icon.svg"
            title="Join"
            description="Subscribe to get the latest offers, updates and more."
          />
          <couse-card
            imgsrc="/privacy-icon.svg"
            title="Leave a review"
            description="Leaving a review helps people find this website. It only takes a minute."
          />
        </v-row>
      </v-container>
    </div>
    <footers class="" />
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

<script>
import MyHeader from '~/components/Header.vue'
import InnerBanner from '~/components/InnerBanner.vue'
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import InnerBannerImage from '~/components/InnerBannerImage.vue'
import HowitWorks from '~/components/HowitWorks.vue'
import ShopBlock from '~/components/ShopBlock.vue'
import CouseCard from '~/components/CauseCard.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'CharityPage',

  components: {
    MyHeader,
    InnerBanner,
    InnerInformationStrip,
    InnerBannerImage,
    HowitWorks,
    ShopBlock,
    CouseCard,
    Footers,
  },
}
</script>
