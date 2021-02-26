<template>
  <div class="charity-page cause-report">
    <div class="home-page">
      <v-container>
        <v-row>
          <div class="d-flex col-12 pt-3 pt-sm-2 align-center">
            <div class="col-6 pt-0 pt-sm-2">
              <logo class="" :width="width" />
            </div>
          </div>
        </v-row>
      </v-container>
    </div>
    <div class="d-block width-full bg-primary relative">
      <v-container class="">
        <v-row>
          <inner-banner
            class="col-12 col-sm-6 left-side-home mt-4 mt-sm-0"
            :isSearchButton="true"
            icon="mdi mdi-magnify"
            maxwidth="387px"
            placeholder="Find your charity"
            bannersubtitle="How digital is your charity?"
            description="The Cause Report is the leading digital research program into the Australian charity sector."
          />
          <inner-banner-image
            bgimg="/cause-report.jpg"
            class="d-sm-flex d-none col-6 m-height-500 ml-auto pa-0 pb-15"
          />
        </v-row>
      </v-container>
    </div>
    <inner-information-strip
      infotext=""
      :hasUrl="false"
      :isRate="false"
      class="col-12 pt-0 pb-0"
    />
    <div class="bg-primary show-case-right-left">
      <v-container>
        <v-row class="flex-sm-row-reverse">
          <heading-copy-block
            class="pt-sm-0 pb-sm-0 pt-10 pb-10"
            title="Custom reports"
            text="We research and measure the digital maturity of <b>over 57,000 Australian charities</b><br/><br/> 
We develop a custom digital benchmark report for each charity. Our insights and recommendations are based on the actual digital footprint of each charity across web, social media and more."
          />
          <v-col class="d-flex text-center">
            <logos-showcase />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <howit-works :isReverseColumn="true" class="mt-10 howitworks-wrapper" />
    <div class="d-block width-full bg-primary about-section pb-8 pb-sm-16">
      <v-container>
        <v-row>
          <v-col class="col-12">
            <h2 class="ml-auto mr-auto width-full text-center">
              How digital is your charity?
            </h2>
            <p
              style="max-width: 425px"
              class="ml-auto mr-auto mb-6 text-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-col>
          <v-col class="col-12">
            <v-col class="col-md-10 col-12 d-sm-flex col ml-auto mr-auto">
              <div class="icon-wrapper text-center">
                <div class="icon-with-border">
                  <img src="/cause-report-icons/web.svg" />
                </div>
                <span>Web</span>
              </div>
              <div class="icon-wrapper text-center">
                <div class="icon-with-border">
                  <img src="/cause-report-icons/social.svg" />
                </div>
                <span>Social</span>
              </div>
              <div class="icon-wrapper text-center">
                <div class="icon-with-border">
                  <img src="/cause-report-icons/Content.svg" />
                </div>
                <span>Content</span>
              </div>
              <div class="icon-wrapper text-center">
                <div class="icon-with-border">
                  <img src="/cause-report-icons/Fundraising.svg" />
                </div>
                <span>Fundraising</span>
              </div>
              <div class="icon-wrapper text-center">
                <div class="icon-with-border">
                  <img src="/cause-report-icons/Security.svg" />
                </div>
                <span>Security</span>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="primary-dark-bg charity-wrapper border-bottom">
      <h2 class="text-primary-color width-full text-center mb-4">
        Our mission
      </h2>
      <p class="width-full text-center font-medium mb-16">
        Empowering charities to thrive in the digital world.
      </p>
      <v-container>
        <v-row style="/*flex-wrap: nowrap*/">
          <couse-card
            imgsrc="/charity-icon.svg"
            title="100%  for Charity"
            description="We are dedicated to supporting every registered charity in Australia."
          />
          <couse-card
            imgsrc="/purpose-icon.svg"
            title="100%  for Purpose"
            description="We are a for-purpose social enterprise. Our partners help us cover our operating expenses. "
          />
          <couse-card
            imgsrc="/cause-report-icons/free.svg"
            title="100%  for Free"
            description="All our insights, tools and resources are free for charities. Forever. "
          />
        </v-row>
      </v-container>
    </div>
    <div class="charity-wrapper border-bottom">
      <h2 class="width-full text-center mb-4">Find your charity</h2>
      <p
        style="max-width: 425px"
        class="weight-300 ml-auto mr-auto mb-6 text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <search-button
        class="ml-auto mr-auto mt-10"
        icon="mdi mdi-magnify"
        placeholder="Find your charity"
      />
    </div>
    <footers class="" />
  </div>
</template>
<style>
.cause-report .innerpage_banner:after {
  display: none;
}
</style>
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
    padding-top: 40px;
    padding-bottom: 40px;
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
import Logo from '~/components/Logo.vue'
import InnerBanner from '~/components/InnerBanner.vue'
import InnerInformationStrip from '~/components/InnerInformationStrip.vue'
import InnerBannerImage from '~/components/InnerBannerImage.vue'
import HowitWorks from '~/components/HowitWorks.vue'
import CouseCard from '~/components/CauseCard.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'CauseReportPage',

  components: {
    Logo,
    InnerBanner,
    InnerInformationStrip,
    InnerBannerImage,
    HowitWorks,
    CouseCard,
    Footers,
  },
}
</script>
