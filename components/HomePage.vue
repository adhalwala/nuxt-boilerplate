<template>
  <div class="">
    <div class="home-page">
      <v-container>
        <v-row>
          <div class="d-flex col-12">
            <div class="col-6">
              <logo class="" :width="width" />
            </div>
            <usermenu class="col-6" />
          </div>
          <banner
            class="col-6"
            bannertitle="Plant a tree"
            bannersubtitle="When you shop online"
            icon="mdi mdi-heart"
            label="Add The Button to Chrome"
          />
          <banner-image class="col-6 d-flex" />
        </v-row>
      </v-container>
    </div>
    <information-strip />
    <howit-works class="mt-10" />
    <div class="bg-primary">
      <v-container>
        <v-row>
          <logos-showcase
            title="Hundreds of stores"
            text="We’ve partnered with the brands you love. And more are joining all the time."
            label="Explore stores"
          />
          <v-col class="d-flex col-6 text-center">
            <showcase-images />
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
    <div class="bg-primary">
      <v-container>
        <v-row>
          <v-col class="d-flex col-7 text-center">
            <showcase-images />
          </v-col>
          <logos-showcase
            class="col-5 pl-15"
            title="Thousands of charities"
            text="There are over 57,000 charities on Cause. All registered and independently verified."
            label="Explore stores"
          />
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
        <v-row no-gutters style="flex-wrap: nowrap">
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
    <div class="pt-15 pb-15 mb-10">
      <h3 class="text-center free-text-lable">
        Add The Cause Button Now.
        <br />
        <span>It’s Free.</span>
      </h3>
      <div class="mt-15">
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
          class="mt-15"
          label="Add the button to chrome"
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
}
</style>

<script>
import Logo from '~/components/Logo.vue'
import Usermenu from '~/components/UserMenu.vue'
import Banner from '~/components/Banner.vue'
import InformationStrip from '~/components/InformationStrip.vue'
import HowitWorks from '~/components/HowitWorks.vue'
import LogosShowcase from '~/components/LogosShowcase.vue'
import ShowcaseImages from '~/components/ShowcaseImages.vue'
import CouseCard from '~/components/CauseCard.vue'
import Testimonials from '~/components/Testimonials.vue'
import Counter from '~/components/Counter.vue'
import CCard from '~/components/Card.vue'
import MyButton from '~/components/Button.vue'
import Footers from '~/components/Footer.vue'

export default {
  name: 'HomePage',

  components: {
    Logo,
    Usermenu,
    Banner,
    InformationStrip,
    HowitWorks,
    LogosShowcase,
    ShowcaseImages,
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
