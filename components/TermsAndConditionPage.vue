<template>
  <div class="charity-page">
    <div class="bg-primary">
      <v-container>
        <v-row>
          <div class="d-flex col-12 pt-3 pt-sm-2 align-center">
            <div class="col-6 pt-0 pt-sm-2">
              <logo class="" :width="width" />
            </div>
            <site-menu class="col-6 pt-0 pt-sm-2" />
          </div>
        </v-row>
      </v-container>
    </div>
    <div class="d-block width-full bg-primary relative">
      <v-container class="">
        <v-row>
          <div class="relative width-full d-block">
            <inner-banner
              class="col-12"
              :isButton="false"
              bannersubtitle="User Terms & Conditions"
            />
          </div>
        </v-row>
      </v-container>
    </div>
    <div
      class="primary-dark-bg inner-page-strip cause-rating-strip recent-tag-wrapper no-border privacy-breadcum"
    >
      <v-container>
        <div
          class="text-center d-flex col-12 pl-2 pr-2 pl-sm-3 pr-sm-3 pt-0 pb-0"
        >
          <v-row>
            <v-col class="d-flex text-left">
              <h6 class="">Published 31st March 2020 (V1)</h6>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <div class="d-block width-full about-section pt-10 pb-15 mb-10">
      <v-container>
        <v-row>
          <v-col class="col-md-10">
            <p class="mb-10">
              This agreement (User Agreement, or Agreement) contains the terms,
              conditions and provisions (Terms and Conditions) upon which You
              (You, or the User) may access and use the App, including all
              Content and all information made available to You through the App
              by Cause or any other party.
            </p>
            <c-accordion
              v-for="(item, i) in 5"
              :key="i"
              :number="i"
              title="Defination"
              description="Cause will only disclose your Personal Information to a third party in the following circumstances:
1. To any third party organisation for any authorised purpose;
2. To your representative with your consent, which may be given in writing, verbal or implied from your conduct or as nominated by you as your executor, trustee or legal representative. We will take reasonable steps to ensure that your representative undertakes to protect your privacy; and/or
3. To Cause’s accountants and legal advisors, information technology service provider, financial institution, law enforcement agency or government authorities as reasonably required.
Your Personal Information will not be shared, sold, rented or disclosed other than as described in this Privacy Policy."
            />
          </v-col>
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
import Logo from '~/components/Logo.vue'
import CAccordion from '~/components/Accordion.vue'
import SiteMenu from '~/components/SiteMenu.vue'
import InnerBanner from '~/components/InnerBanner.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'TermsAndConditionPage',

  components: {
    Logo,
    CAccordion,
    SiteMenu,
    InnerBanner,
    Footers,
  },
}
</script>
